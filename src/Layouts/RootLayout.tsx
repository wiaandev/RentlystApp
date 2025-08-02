import React from "react";
import { Grid2 } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Components/Header/Header.tsx";
import Dock from "../Components/Dock/Dock.tsx";
import { Dashboard, House, Person } from "@mui/icons-material";

export const RootLayout: React.FC = () => {
  const navigate = useNavigate();
  const items = [
    { icon: <Dashboard />, label: "Home", onClick: () => navigate('/')},
    {
      icon: <House />,
      label: "Listings",
      onClick: () => navigate("listings"),
    },
    {
      icon: <Person />,
      label: "Profile",
      onClick: () => navigate('profile'),
    },
  ];

  return (
    <Grid2 container size={12}>
      <Header />
      <Grid2 p={5} size={12} overflow={"auto"}>
        <Outlet />
      </Grid2>
      <Grid2
        size={{ xs: 12, lg: 0 }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
        }}
      >
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={50}
        />
      </Grid2>
    </Grid2>
  );
};
