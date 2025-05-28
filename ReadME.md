# 🏡 Mortgage Calculator with AI Assistant

A React-based mortgage calculator that lets users input loan details and get estimated payoff dates, interest savings, and more. Bonus feature: an AI-powered assistant that answers natural language questions about your loan strategy.

---

## 📋 Overview

This app allows users to:
- Enter mortgage inputs: loan amount, interest rate, loan term, extra payments.
- Calculate updated mortgage payoff date, total interest saved, and months saved.
- Interact with an AI assistant to ask questions like:
  - “How much sooner will I pay off my loan if I add $300 per month?”
  - “What is the total interest I’ll save?”

---

## 🚀 How to Run Locally

### 1. Clone the repository or unzip the code

```bash
cd mortgage-vercel-ready
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open your browser at:  
**http://localhost:3000**

---

## 🧠 AI Tools / APIs Used

-  **No external AI APIs used**  
-  AI logic is implemented locally using a basic rule-based parser inside the `ChatAssistant` component.

For full AI capabilities (e.g., ChatGPT), you can later integrate OpenAI’s API or similar.

---

## ⚙️ Assumptions / Limitations

- Assumes consistent monthly payments with no interruptions.
- Uses simplified amortization logic.
- AI assistant uses hardcoded keyword matching — not real NLP.
- No backend — calculations run entirely in the browser.
- Doesn't persist user input or results.
- Mobile responsiveness is minimal.

---

## 📦 Built With

- [Next.js](https://nextjs.org/) (React)
- TypeScript
- HTML/CSS (inline styles)
