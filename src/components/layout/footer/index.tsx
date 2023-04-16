import React, { useContext } from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Box,
} from "@pankod/refine-mui";

import { ColorModeContext } from "contexts";
import { NotificationsOutlined } from "@mui/icons-material";
import { makeStyles } from "@pankod/refine-mui";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#232323",
    color: "#ffffff",
    padding: 4,
    textAlign: "center",
  },
  footerText: {
    fontSize: "1rem",
    fontWeight: 400,
    margin: 1,
  },
  footerLink: {
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export const Footer: React.FC = () => {
  const shouldRenderFooter = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderFooter ? (
    <footer
      style={{
        backgroundColor: "#232323",
        color: "#ffffff",
        padding: 4,
        textAlign: "center",
      }}
    >
      <Box>
        Made with ❤️ by{" "}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Your Name
        </a>
      </Box>
      <Box>
        <Typography>
          © {new Date().getFullYear()} All rights reserved
        </Typography>
      </Box>
    </footer>
  ) : null;
};
