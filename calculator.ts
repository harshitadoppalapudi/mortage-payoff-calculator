export function calculateMortgage(
  principal: number,
  annualInterestRate: number,
  termYears: number,
  extraPayment: number,
  startDate: Date
) {
  const monthlyRate = annualInterestRate / 100 / 12;
  const totalPayments = termYears * 12;

  let balance = principal;
  let months = 0;
  let totalInterest = 0;

  while (balance > 0 && months < 1000) {
    const interest = balance * monthlyRate;
    const principalPayment = ((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments))) - interest + extraPayment;
    balance -= principalPayment;
    totalInterest += interest;
    months++;
    if (balance < 0) balance = 0;
  }

  const originalMonths = totalPayments;
  const monthsSaved = originalMonths - months;
  const originalInterest = (principal * monthlyRate * totalPayments);
  const interestSaved = originalInterest - totalInterest;

  const payoffDate = new Date(startDate);
  payoffDate.setMonth(payoffDate.getMonth() + months);

  return { payoffDate, interestSaved, monthsSaved };
}

