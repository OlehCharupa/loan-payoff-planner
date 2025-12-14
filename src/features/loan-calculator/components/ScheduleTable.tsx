"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import type { LoanScheduleItem } from "../types";

type ScheduleTableProps = {
  schedule: LoanScheduleItem[];
};

export const ScheduleTable = ({ schedule }: ScheduleTableProps) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400, overflowX: "auto" }}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>{t("table.month")}</TableCell>
            <TableCell align="right">{t("table.payment")}</TableCell>
            <TableCell align="right">{t("table.interest")}</TableCell>
            <TableCell align="right">{t("table.principal")}</TableCell>
            <TableCell align="right">{t("table.balance")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.monthIndex}>
              <TableCell>{row.monthIndex}</TableCell>
              <TableCell align="right">{row.payment.toFixed(2)}</TableCell>
              <TableCell align="right">{row.interestPart.toFixed(2)}</TableCell>
              <TableCell align="right">{row.principalPart.toFixed(2)}</TableCell>
              <TableCell align="right">{row.balance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
