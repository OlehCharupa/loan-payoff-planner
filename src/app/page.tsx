"use client";

import { Box, Stack, Typography } from "@mui/material";
import { AppHeader } from "@/shared/components/Layout/AppHeader";

export default function Page() {
  return (
    <Box>
      <AppHeader />
      <Stack spacing={3} mt={3}>
        <Typography variant="body1">
          Start by entering your loan details to calculate payoff time and total interest.
        </Typography>

        {/* тут згодом будуть LoanForm, SummaryCards, Chart, Table */}
      </Stack>
    </Box>
  );
}
