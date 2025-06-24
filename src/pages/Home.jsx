import React from "react";
import { Box, Typography, Stack, Link as MuiLink } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LaunchIcon from "@mui/icons-material/Launch";
import placeholderImage from "../assets/images/homepage-video-placeholder.png";
import MissionSection from "../components/homepage-components/Mission";
import WhatWeDo from "../components/homepage-components/WhatWeDo";
import { Link } from "react-router-dom";
import RotatingLinks from "../components/homepage-components/RotatingLinks";
import VerticalLines from "../components/VerticalLines";
import Auth from "../utils/auth"; // Import authentication utility

const Home = () => {
  const isLoggedIn = Auth.loggedIn(); // Check if the user is logged in

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "210vh",
        color: "white",
        textAlign: "center",
        px: 2,
        position: "relative",
        fontFamily: "Trap",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "18%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <RotatingLinks />
      </Box>

      {/* vertical lines */}
      <Box
        sx={{
          zIndex: 1,
        }}
      >
        <VerticalLines />
      </Box>

      {/* hero section */}
      <Box sx={{ mb: 4, position: "relative", display: "inline-block" }}>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "100px",
            left: "70px",
            fontWeight: "bold",
            color: "#272727",
            fontFamily: "Trap",
          }}
        >
          &gt; stop swiping
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            bottom: "100px",
            right: "70px",
            fontWeight: "bold",
            color: "#272727",
            fontFamily: "Trap",
          }}
        >
          &gt; start meeting
        </Typography>

        {/* video placeholder */}
        <Box
          component="img"
          src={placeholderImage}
          alt="Video Placeholder"
          sx={{
            width: "100%",
            maxWidth: 1000,
            height: "auto",
            borderRadius: 2,
          }}
        />
      </Box>

      {/* phone number */}
      <Box
        sx={{
          position: "absolute",
          right: "200px",
          top: "22%",
          display: "flex",
          alignItems: "center",
          color: "#FF6666",
        }}
      >
        <PhoneIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ fontFamily: "Trap", fontWeight: 400, color: "white" }}>
          210.000.0000
        </Typography>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          mb: 20,
          mt: -3,
          width: "100%",
          maxWidth: 1100,
          "& a": {
            color: "white",
            textDecoration: "none",
            fontWeight: "light",
            fontFamily: "Trap",
            position: "relative",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "#FF6666",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#FF6666",
              },
            },
            "&:hover svg": {
              opacity: 1,
            },
            "& svg": {
              fontSize: "0.8rem",
              ml: 0.5,
              opacity: 0,
              transition: "opacity 0.3s ease",
            },
          },
        }}
      >
        {/* Conditional button rendering */}
        <MuiLink component={Link} to={isLoggedIn ? "/dashboard" : "/signup"}>
          {isLoggedIn ? "DASHBOARD" : "LOGIN / SIGN UP"}
          <LaunchIcon />
        </MuiLink>
        <MuiLink href="/events">
          GO ON A DATE
          <LaunchIcon />
        </MuiLink>
        <MuiLink href="/dating-advice">
          DATING ADVICE
          <LaunchIcon />
        </MuiLink>
        <MuiLink href="/events">
          BUY EVENT TICKET
          <LaunchIcon />
        </MuiLink>
      </Stack>

      {/* additional sections */}
      <MissionSection />
      <WhatWeDo />
    </Box>
  );
};

export default Home;