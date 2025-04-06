from fastapi import FastAPI, Request
import json
from backend.agents.listing_agent import analyze_listing

app = FastAPI()

# Path to the JSON file containing the fake listing
FAKE_LISTING_PATH = "backend/test_data/fake_listing_1.json"

# Global variable to store the analyze result
analyze_result = None

@app.post("/analyze")
async def analyze(request: Request):
    data = await request.json()
    title = data.get("title", "")
    description = data.get("description", "")
    price = float(data.get("price", 0))
    image_url = data.get("image_url", None)
    conversation = data.get("conversation", "")

    result = analyze_listing(title, description, price, image_url, conversation)
    return {"result": result}

@app.on_event("startup")
async def run_analyze_on_startup():
    global analyze_result

    # Load fake listing JSON
    with open(FAKE_LISTING_PATH, 'r') as f:
        data = json.load(f)

    title = data.get("title", "")
    description = data.get("description", "")
    price = float(data.get("price", 0))
    image_url = data.get("image_url", None)
    conversation = data.get("conversation", "")

    # Run full analysis with image and conversation
    analyze_result = analyze_listing(title, description, price, image_url, conversation)

    print("✅ Analysis Result:")
    print(json.dumps(analyze_result, indent=2))

@app.get("/")
async def read_root():
    return {
        "message": "Welcome to the Trust Advisor API!",
        "result": analyze_result
    }
