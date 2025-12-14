"use client";

import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { LoanParams } from "../types";

type LoanFormProps = {
  onSubmit: (params: LoanParams) => void;
};

export const LoanForm = ({ onSubmit }: LoanFormProps) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("10000");
  const [annualRate, setAnnualRate] = useState("24");
  const [monthlyPayment, setMonthlyPayment] = useState("1000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      amount: Number(amount),
      annualRate: Number(annualRate),
      monthlyPayment: Number(monthlyPayment),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label={t("form.loanAmount")}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label={t("form.annualRate")}
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label={t("form.monthlyPayment")}
          type="number"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained">
          {t("form.submit")}
        </Button>
      </Stack>
    </form>
  );
};
