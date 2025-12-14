import { LoanParams, LoanResult, LoanScheduleItem } from "../types";

const MAX_MONTHS = 1000; // захист від нескінченного циклу

export function calculateSchedule(params: LoanParams): LoanResult {
  const { amount, annualRate, monthlyPayment, startDate } = params;

  const monthlyRate = annualRate / 12 / 100;
  let balance = amount;
  let monthIndex = 0;
  let totalInterest = 0;
  const schedule: LoanScheduleItem[] = [];

  if (monthlyRate > 0 && monthlyPayment <= balance * monthlyRate) {
    throw new Error("Monthly payment is too low to cover interest.");
  }

  while (balance > 0 && monthIndex < MAX_MONTHS) {
    monthIndex += 1;

    const interestPart = balance * monthlyRate;
    let principalPart = monthlyPayment - interestPart;
    let payment = monthlyPayment;

    if (principalPart > balance) {
      principalPart = balance;
      payment = interestPart + principalPart;
    }

    balance = balance - principalPart;

    totalInterest += interestPart;

    schedule.push({
      monthIndex,
      payment,
      interestPart,
      principalPart,
      balance: Math.max(balance, 0),
    });
  }

  const totalPaid = amount + totalInterest;

  let payoffDate: Date | undefined;
  if (startDate) {
    payoffDate = new Date(startDate);
    payoffDate.setMonth(payoffDate.getMonth() + schedule.length);
  }

  return {
    schedule,
    monthsToPayoff: schedule.length,
    totalInterest,
    totalPaid,
    payoffDate,
  };
}
