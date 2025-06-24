import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Mission = () => {
  const items = [
    {
      title: "learn",
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#ff5555" }} />,
      description:
        "Provide a safe atmosphere that encourages healthy vulnerability, breakthrough, accountability, and improvement. This will be accomplished through in-person coaching as well as video/e-courses.",
    },
    {
      title: "match",
      icon: <FavoriteIcon sx={{ fontSize: 40, color: "#ff5555" }} />,
      description:
        "Serve as a venue for singles to meet by combining modern technology while humanizing the experience. Social events, video speed dating, and matchmaking will be quality channels used to disrupt 'swipe app' culture.",
    },
    {
      title: "connect",
      icon: <ShareIcon sx={{ fontSize: 40, color: "#ff5555" }} />,
      description:
        "Build a community of healthy daters that are ambassadors of positive change. The community will be built on inclusion and encouraged to exchange knowledge and ideas.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        color: "white",
        py: 6,
        px: 4,
        textAlign: "center",
      }}
    >
      {/* Title Section */}
      <Typography variant="h4" sx={{ color: "#ff5555", fontWeight: "bold", mb: 1 }}>
        OUR MISSION
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#a9a9a9", mb: 4 }}>
        THE CURE FOR THE COMMON DATE
      </Typography>

      {/* Mission Items */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ justifyContent: "space-evenly", alignItems: "flex-start" }}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ maxWidth: 300, textAlign: "center" }}>
            {item.icon}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "uppercase", mt: 2 }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#a9a9a9", mt: 1 }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Mission;