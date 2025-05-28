import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import ResultDisplay from '../components/ResultDisplay';
import ChatAssistant from '../components/ChatAssistant';
import { calculateMortgage } from '../utils/calculator';

type FormData = {
  principal: string;
  interestRate: string;
  termYears: string;
  extraPayment: string;
  startDate: string;
};

type ResultData = {
  payoffDate: Date;
  interestSaved: number;
  monthsSaved: number;
};

export default function Home() {
  const [results, setResults] = useState<ResultData | null>(null);

  const handleSubmit = (data: FormData) => {
    const res = calculateMortgage(
      parseFloat(data.principal),
      parseFloat(data.interestRate),
      parseInt(data.termYears),
      parseFloat(data.extraPayment),
      new Date(data.startDate)
    );
    setResults(res);
  };

  const handleAIQuestion = (question: string): string => {
    if (question.includes('$300')) {
      return 'If you pay $300 extra monthly, you may finish 3–5 years earlier and save thousands in interest.';
    } else if (question.toLowerCase().includes('20 years')) {
      return 'To finish in 20 years, you’ll likely need to increase your monthly payment significantly.';
    } else if (question.toLowerCase().includes('interest')) {
      return 'You could save between $10,000–$50,000 in interest depending on the extra payment and rate.';
    }
    return 'I’m still learning. Try asking about extra payments or payoff timelines!';
  };

  return (
    <div style={{ padding: 20 }}>
      <InputForm onSubmit={handleSubmit} />
      {results && <ResultDisplay results={results} />}
      <ChatAssistant onAsk={handleAIQuestion} />
    </div>
  );
}
