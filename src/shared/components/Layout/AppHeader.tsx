"use client";

import { AppBar, Toolbar, Typography, Box, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const AppHeader = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language || "uk";

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="h1">
          {t("app.title")}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">{t("header.language")}:</Typography>
          <Select
            size="small"
            value={currentLang}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <MenuItem value="uk">{t("lang.uk")}</MenuItem>
            <MenuItem value="en">{t("lang.en")}</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
