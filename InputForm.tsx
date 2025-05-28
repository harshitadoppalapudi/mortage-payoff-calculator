import React, { useState } from 'react';

export default function InputForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    principal: '',
    interestRate: '',
    termYears: '',
    extraPayment: '',
    startDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input placeholder="Loan Amount" type="number" onChange={e => handleChange('principal', e.target.value)} />
      <input placeholder="Interest Rate (%)" type="number" onChange={e => handleChange('interestRate', e.target.value)} />
      <input placeholder="Loan Term (Years)" type="number" onChange={e => handleChange('termYears', e.target.value)} />
      <input placeholder="Extra Monthly Payment" type="number" onChange={e => handleChange('extraPayment', e.target.value)} />
      <button onClick={() => onSubmit(formData)} style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', fontWeight: 'bold' }}>
        CALCULATE
      </button>
    </div>
  );
}
