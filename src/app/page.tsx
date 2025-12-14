"use client";

import { useState } from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import { AppHeader } from "@/shared/components/Layout/AppHeader";
import { LoanForm } from "@/features/loan-calculator/components/LoanForm";
import { SummaryCards } from "@/features/loan-calculator/components/SummaryCards";
import { ScheduleTable } from "@/features/loan-calculator/components/ScheduleTable";
import { calculateSchedule } from "@/features/loan-calculator/lib/calculateSchedule";
import type { LoanResult, LoanParams } from "@/features/loan-calculator/types";

export default function Page() {
  const { t } = useTranslation();
  const [result, setResult] = useState<LoanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (params: LoanParams) => {
    try {
      const calcResult = calculateSchedule(params);
      setResult(calcResult);
      setError(null);
    } catch (e) {
      setResult(null);
      setError(e instanceof Error ? e.message : t("state.error"));
    }
  };

  return (
    <Box>
      <AppHeader />
      <Stack spacing={3} mt={3}>
        <Typography variant="body1">{t("app.description")}</Typography>

        <Paper sx={{ p: 2 }}>
          <LoanForm onSubmit={handleSubmit} />
        </Paper>

        <Stack spacing={2}>
          {error && (
            <Paper sx={{ p: 2 }}>
              <Typography color="error">{error}</Typography>
            </Paper>
          )}

          {result && (
            <>
              <SummaryCards result={result} />
              <ScheduleTable schedule={result.schedule} />
            </>
          )}

          {!error && !result && (
            <Typography variant="body2" color="text.secondary">
              {t("state.noCalculation")}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
