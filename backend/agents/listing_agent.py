import os
import json
import requests
from mistralai import Mistral, UserMessage
from backend.rag.rag_engine import get_rag_context
from backend.agents.image_agent import compare_images
from serpapi import GoogleSearch
from PIL import Image, ImageChops
from io import BytesIO


model = "mistral-small"
client = Mistral(api_key=os.getenv("api_key"))

SERPAPI_API_KEY = os.getenv("SERPAPI_API_KEY")

def check_image_with_serpapi(image_url: str) -> dict:
    params = {
        "engine": "google_reverse_image",
        "image_url": image_url,
        "api_key": SERPAPI_API_KEY,
    }

    try:
        search = GoogleSearch(params)
        results = search.get_dict()
        matches = results.get("image_results", [])
        pages = results.get("pages_with_matching_images", [])
        match_urls = [match.get("original") or match.get("thumbnail") for match in matches if match.get("original") or match.get("thumbnail")][:20]
        similarity = compare_images(image_url, match_urls) if match_urls else {}

        return {
            "image_found_elsewhere": len(match_urls) > 0,
            "image_matches": match_urls,
            "similarity": similarity
        }
    except Exception as e:
        return {"error": str(e)}

def analyze_listing(title: str, description: str, price: float, image_url: str = None, conversation: str = "") -> dict:
    listing_summary = f"Title: {title}\nDescription: {description}\nPrice: ${price}"

    # 🧠 Context from your Markdown-based RAG knowledge base
    rag_context = get_rag_context(listing_summary)
    scoring_guide = get_rag_context("How to compute the scam score?")
    examples_reference = get_rag_context("Show me examples of scam and safe listings.")


    # 🔍 Optional: check the conversation via RAG
    conversation_check = ""
    if conversation.strip():
        conversation_check = get_rag_context(f"conversation_check:\n{conversation}")
        if conversation_check:
            print("📥 RAG conversation insight:", conversation_check)

    # 🔍 Image analysis
    image_analysis = {}
    if image_url:
        image_analysis = check_image_with_serpapi(image_url)

    # Format conversation clearly
    formatted_convo = "\n".join(
        [f"Buyer said: {line}" if "buyer" in line.lower() else f"Seller said: {line}" for line in conversation.strip().splitlines()]
    ) if conversation else "N/A"

    # 🔮 Prompt to Mistral
    prompt = f"""
You are a fraud detection assistant specialized in identifying scam listings.

Use the following scoring methodology to evaluate how risky this listing is:
{scoring_guide}

Here are some examples to guide your reasoning:
{examples_reference}

Analyze the following listing:

Title: {title}
Description: {description}
Price: ${price}

Conversation:
{formatted_convo}

Image Analysis:
{json.dumps(image_analysis, indent=2)}

Return your assessment in exactly this JSON format:

{{
  "score": <0–100>,
  "red_flags": ["..."],
  "verdict": "Likely Scam" | "Possibly Scam" | "Likely Safe",
  "scammer_objective": "Explain briefly or 'None'",
  "reasoning": "Explain your scoring decisions",
  "suggested_reply": "A safe message the buyer could send to avoid a scam"
}}

Return JSON only, without commentary.
"""



    # Send prompt to Mistral
    messages = [UserMessage(content=prompt)]
    stream_response = client.chat.stream(model=model, messages=messages)

    response_content = ""
    for chunk in stream_response:
        response_content += chunk.data.choices[0].delta.content

    try:
        result = json.loads(response_content)
        result["image_analysis"] = image_analysis
        result["conversation"] = conversation
        return result
    except json.JSONDecodeError:
        return {
            "error": "Invalid JSON format from Mistral",
            "raw_output": response_content,
            "image_analysis": image_analysis,
            "conversation": conversation
        }
