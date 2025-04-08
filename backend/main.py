from fastapi import FastAPI, Request
import json
import logging
from backend.agents.listing_agent import analyze_listing
from backend.scraping.ebay_analysis import ebay_analysis

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

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

@app.post("/api/page-source")
async def receive_page_source(request: Request):
    try:
        logger.info("Received page source request")
        data = await request.json()
        html = data.get("html")
        url = data.get("url")
        
        if not html or not url:
            logger.error("Missing html or url in request")
            return {"success": False, "error": "Missing html or url in request"}
            
        logger.info(f"Processing page source from: {url}")
        logger.info(f"HTML content length: {len(html)} characters")

        try:
            logger.info("Starting eBay analysis...")
            analysis = ebay_analysis(html)
            
            analyze_result = analyze_listing(analysis["title"], analysis["description"], analysis["price"], analysis["image_url"], analysis["conversation"])

            
            return {
                "success": True,
                "message": f"Successfully processed page source from {url}",
                "analysis": analysis
            }
        except Exception as analysis_error:
            logger.error(f"Error during analysis: {str(analysis_error)}", exc_info=True)
            return {
                "success": False,
                "error": f"Analysis failed: {str(analysis_error)}"
            }
            
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}", exc_info=True)
        return {"success": False, "error": str(e)}

@app.on_event("startup")
async def run_analyze_on_startup():
    global analyze_result
    logger.info("Starting up the application...")

    try:
        # Load fake listing JSON
        with open(FAKE_LISTING_PATH, 'r') as f:
            data = json.load(f)

        title = data.get("title", "")
        description = data.get("description", "")
        price = float(data.get("price", 0))
        image_url = data.get("image_url", None)
        conversation = data.get("conversation", "")

        logger.info("✅ Startup completed successfully")
    except Exception as e:
        logger.error(f"Error during startup: {str(e)}", exc_info=True)

@app.get("/")
async def read_root():
    return {
        "message": "Welcome to the Trust Advisor API!",
        "result": analyze_result
    }
