import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";

const WhatWeDo = () => {
  const items = [
    {
      title: "we coach",
      icon: <PersonIcon sx={{ fontSize: 40, color: "#ff5555" }} />,
      description:
        "One of the few dating coaching companies that provides expert advice for both men and women. This is accomplished through our one-on-one coaching as well as our Dating & Life Skills Academy ecourses.",
    },
    {
      title: "we connect",
      icon: <ShareIcon sx={{ fontSize: 40, color: "#ff5555" }} />,
      description:
        "Instead of attending to connect on tiresome dating apps, our company emphasizes building a connection over endless swiping. Our personalized matchmaking and video speed dating events have been proven to lead to better outcomes.",
    },
    {
      title: "we inform",
      icon: <InfoIcon sx={{ fontSize: 40, color: "#ff5555" }} />,
      description:
        "Constantly produce relevant news and commentary on the world of dating through our popular social media and podcast platforms. The Dating Doc is currently ranked as the #20 Top Dating and Relationship Influencer.",
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
        WHAT WE DO
      </Typography>

      {/* What We Do Items */}
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
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                mt: 2,
              }}
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

export default WhatWeDo;
