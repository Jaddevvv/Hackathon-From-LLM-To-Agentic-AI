from bs4 import BeautifulSoup
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Global variable to store the last result
last_result = {
    "image_url": None,
    "title": None,
    "description": None,
    "price": None,
    "conversation": ""
}

def ebay_analysis(html: str) -> dict:
    global last_result
    logger.info("Starting eBay page analysis...")
    try:
        soup = BeautifulSoup(html, 'html.parser')

        # Find <img> src inside any div with aria-label containing "Opens image gallery"
        img_div = soup.find('div', {'aria-label': lambda x: x and 'Opens image gallery' in x})

        # Initialize variables
        img_src = None
        title_text = None
        description_text = None
        price_text = None
        conversation = ""

        if img_div:
            img_tag = img_div.find('img')
            if img_tag and 'src' in img_tag.attrs:
                img_src = img_tag['src']
            else:
                logger.warning("No image source found in the image tag")

            # Find title
            title = soup.find('h1', {'class': 'x-item-title__mainTitle'})
            if title:
                title_text = title.get_text(strip=True)
            else:
                logger.warning("Title not found")

            # Find description
            description = soup.find('div', {'data-testid': 'x-about-this-item'})
            if description:
                description_text = description.get_text(strip=True)
            else:
                logger.warning("Description not found")

            # Find price
            price_elem = soup.find('div', {'data-testid': 'x-price-primary'})
            if price_elem:
                price_text = price_elem.get_text(strip=True)
            else:
                logger.warning("Price not found")

        else:
            logger.warning("No image gallery div found, checking for conversation")

            # find all divs with data-testid="app-conversation"
            conversation_divs = soup.find_all('div', {'data-testid': 'app-conversation'})
            conversation_divs = conversation_divs[::-1]
            for div in conversation_divs:
                if div.tabindex == "-1":
                    conversation += "Buyer Said :" + div.text + "\n"
                else:
                    conversation += "Seller Said :" + div.text + "\n"

        result = {
            "image_url": img_src,
            "title": title_text,
            "description": description_text,
            "price": price_text,
            "conversation": conversation
        }

        # Update the global last_result with any new information
        if (img_src != None):
            last_result.update(result)
        else:
            last_result["conversation"] = conversation

        logger.info("Last Result:")
        logger.info(last_result)

        if (conversation != ""):
            return last_result
        else:
            return result

    except Exception as e:
        logger.error(f"Error during eBay analysis: {str(e)}", exc_info=True)
        raise


        