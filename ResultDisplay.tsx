import React from 'react';

export default function ResultDisplay({ results }: { results: any }) {
  return (
    <div style={{ marginTop: 20, background: '#e0e0e0', padding: 15, borderRadius: 5 }}>
      <p>Payoff Date: {results.payoffDate.toDateString()}</p>
      <p>Interest Saved: ${results.interestSaved.toFixed(2)}</p>
      <p>Months Saved: {results.monthsSaved}</p>
    </div>
  );
}
