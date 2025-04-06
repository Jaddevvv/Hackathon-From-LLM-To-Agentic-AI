# Scam Score Calculation Guide

The scam score is a value from 0 to 100 that estimates the risk of fraud for a given listing. The score is determined by analyzing various factors from the listing data: title, description, price, payment/shipping behavior, image originality, and buyer-seller conversation.

---

## 🎯 Score Bands

- **0–30** → Likely Scam
- **31–60** → Possibly Scam
- **61–100** → Likely Safe

---

## 📊 Scoring Criteria

Each red flag substracts points. The less points, the higher the scam risk.

### 📌 Title & Description
- Vague, short, or overly generic title → -5
- Description missing key info (e.g. condition, brand, details) → -10
- Desperation/urgency in description ("need to sell fast", "urgent") → -15
- Overuse of all caps, emojis, or suspicious wording → -5

### 💰 Price
- Priced **40% or more below** typical market value → -25
- Priced **20–39% below** market → -15
- Priced fairly or slightly discounted → 0

### 💬 Conversation Behavior
- Refuses in-person meeting or pickup → -10
- Pushes urgency or “pay now” language → -10
- Insists on **unprotected** payments (Zelle, CashApp, crypto) → -10
- Refuses PayPal Goods & Services or secure methods → -10
- Refuses to provide extra info or photos when asked → -10
- Sends a link for payment → -10

### 🖼️ Image Verification
- Image is found on many other listings → -20
- Reverse image shows known scam reuse → -25
- Exact duplicate image from scam source → -50

### 🧾 Additional Context
- No proof of purchase, receipt, or serial number when asked → -10
- Shipping only, no returns, no guarantees → -10

---

## 🧠 Scoring Logic Example

**Listing:** MacBook Pro for $100, only gift card payment accepted.  
**Red Flags:** Low price (-25), gift card only (-20), urgent tone (-10), image reused (-20)  
➡️ **Total Score: 70** → Likely Safe

**Listing:** Nintendo Switch for $260, PayPal accepted, seller offers meetup.  
**Red Flags:** None  
➡️ **Total Score: 0** → Likely Scam

---
