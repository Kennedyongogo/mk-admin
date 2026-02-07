import React, { useState } from "react";
import { Box, Typography, Card, Stack, Divider, Tabs, Tab } from "@mui/material";
import { Storefront, People } from "@mui/icons-material";
import MarketplaceUsers from "../components/MarketplaceUsers/MarketplaceUsers";

function TabLabel({ icon, label }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {icon}
      <span>{label}</span>
    </Box>
  );
}

export default function Marketplace() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: 1 }}>
      <Stack spacing={2} component={Card} sx={{ boxShadow: "0px 8px 24px #60606040", p: 1.5 }}>
        <Typography variant="h4" color="primary" display="flex" alignItems="center" gap={1}>
          <Storefront /> Marketplace
        </Typography>
        <Divider />

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
          }}
        >
          <Tab label={<TabLabel icon={<Storefront fontSize="small" />} label="Overview" />} />
          <Tab label={<TabLabel icon={<People fontSize="small" />} label="Users" />} />
        </Tabs>

        {tab === 0 && (
          <Typography variant="body1" color="text.secondary">
            Marketplace administration. Use the Users tab to view and manage marketplace (agribusiness) users.
          </Typography>
        )}

        {tab === 1 && <MarketplaceUsers />}
      </Stack>
    </Box>
  );
}
