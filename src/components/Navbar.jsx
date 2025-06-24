import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import VerticalLines from "./VerticalLines";
import Auth from '../utils/auth'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 1100,
        padding: 2,
      }}
    >
      {/* logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <Box component="img" src={logo} alt="The Dating Doc Logo" sx={{ width: "90px" }} />
        </Link>
      </Box>

      {/* menu text and icon */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          onClick={toggleMenu}
          sx={{
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "white",
            mr: 2,
          }}
        >
          MENU
        </Typography>
        <IconButton onClick={toggleMenu} sx={{ color: "white", zIndex: 1200 }}>
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>

      {/* full-ccreen sidebar drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            color: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
            zIndex: 1300,
          },
        }}
      >
        {/* sidebar logo */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
          }}
        >
          <Link to="/">
            <Box component="img" src={logo} alt="The Dating Doc Logo" sx={{ width: "90px" }} />
          </Link>
        </Box>

        {/* close button */}
        <IconButton
          onClick={toggleMenu}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "white",
            fontSize: "1rem",
            zIndex: 1400,
          }}
        >
          CLOSE
          <CloseIcon sx={{ fontSize: "3rem", ml: 2, fontWeight: "light" }} />
        </IconButton>

        {/* menu links */}
        <Stack spacing={3} sx={{ textAlign: "center" }}>
          {["HOME", "ABOUT", "SERVICES", "BLOG", "MEDIA", "SHOP", "CONTACT"].map(
            (item, index) => (
              <Link
                to={`/${item.toLowerCase().replace(" / ", "/").replace(" ", "-")}`}
                key={index}
                onClick={toggleMenu}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    "&:hover": { color: "#ff5555" },
                  }}
                >
                  {item}
                </Typography>
              </Link>
            )
          )}
          {!Auth.loggedIn() ? (<Link
            to={`/login`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                "&:hover": { color: "#ff5555" },
              }}
            >
              Login/Signup
            </Typography>
          </Link>) : (<button
            onClick={() => Auth.logout()}
          >Logout</button>)}
        </Stack>

        {/* vertical lines */}
        <VerticalLines />

        {/* social media links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ position: "absolute", bottom: 70, color: "white", textAlign: "center" }}
        >
          {["Instagram", "Facebook", "YouTube", "Spotify"].map((platform, index) => (
            <MuiLink
              key={index}
              href={`https://${platform.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.5rem",
                "&:hover": { color: "#ff5555" },
              }}
            >
              {platform}
            </MuiLink>
          ))}
        </Stack>
      </Drawer>
    </Box >
  );
};

export default Navbar;
