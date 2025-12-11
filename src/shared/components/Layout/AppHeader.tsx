"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";

export const AppHeader = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar disableGutters>
      <Typography variant="h6" component="h1">
        Loan Payoff Planner
      </Typography>
    </Toolbar>
  </AppBar>
);
