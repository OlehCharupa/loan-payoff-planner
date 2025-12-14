export type LoanParams = {
  amount: number; // початкова сума боргу
  annualRate: number; // річна ставка у відсотках, напр. 24
  monthlyPayment: number; // щомісячний платіж
  startDate?: Date; // опційно, для дати повного погашення
};

export type LoanScheduleItem = {
  monthIndex: number; // 1, 2, 3, ...
  payment: number;
  interestPart: number;
  principalPart: number;
  balance: number;
};

export type LoanResult = {
  schedule: LoanScheduleItem[];
  monthsToPayoff: number;
  totalInterest: number;
  totalPaid: number;
  payoffDate?: Date;
};
