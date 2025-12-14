"use client";

import { Stack, Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { LoanResult } from "../types";

type SummaryCardsProps = {
  result: LoanResult;
};

export const SummaryCards = ({ result }: SummaryCardsProps) => {
  const { t } = useTranslation();
  const { monthsToPayoff, totalInterest, totalPaid, payoffDate } = result;

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} useFlexGap flexWrap="wrap">
      <Card sx={{ flex: { sm: "1 1 0" } }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {t("summary.monthsToPayoff")}
          </Typography>
          <Typography variant="h6">{monthsToPayoff}</Typography>
        </CardContent>
      </Card>

      <Card sx={{ flex: { sm: "1 1 0" } }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {t("summary.totalInterest")}
          </Typography>
          <Typography variant="h6">{totalInterest.toFixed(2)}</Typography>
        </CardContent>
      </Card>

      <Card sx={{ flex: { sm: "1 1 0" } }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {t("summary.totalPaid")}
          </Typography>
          <Typography variant="h6">{totalPaid.toFixed(2)}</Typography>
        </CardContent>
      </Card>

      {payoffDate && (
        <Card sx={{ flex: { sm: "1 1 0" } }}>
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary">
              {t("summary.payoffDate")}
            </Typography>
            <Typography variant="h6">{payoffDate.toLocaleDateString()}</Typography>
          </CardContent>
        </Card>
      )}
    </Stack>
  );
};
