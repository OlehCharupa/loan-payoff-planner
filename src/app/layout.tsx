import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { theme } from "@/shared/theme";
import { I18nProvider } from "@/i18n/I18nProvider";

export const metadata: Metadata = {
  title: "Loan Payoff Planner",
  description: "Calculate loan payoff time and total interest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ py: 4 }}>
              {children}
            </Container>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
