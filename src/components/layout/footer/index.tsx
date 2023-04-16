import React, { useContext } from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Box,
  height,
} from "@pankod/refine-mui";

import { ColorModeContext } from "contexts";
import { NotificationsOutlined } from "@mui/icons-material";

export const Footer: React.FC = () => {
  const shouldRenderFooter = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderFooter ? (
    <footer
      style={{
        backgroundColor: "#232323",
        color: "#ffffff",
        padding: 4,
        textAlign: "center",
        minHeight: "20vh",
        height: "fit-content",
      }}
    >
      <Box>
        <Box>
          <Typography sx={{ color: "#fafafa" }}>
            Made with ❤️ by Sujoy
          </Typography>
          <Typography>
            Find me in{" "}
            <a
              href="https://github.com/sujoyduttajad"
              rel="noopener noreferrer"
              style={{ color: "#fafafa" }}
            >
              GitHub
            </a>
          </Typography>
          <Typography>
            Find me in{" "}
            <a
              href="https://twitter.com/SujoyDutta4290"
              rel="noopener noreferrer"
              style={{ color: "#fafafa" }}
            >
              Twitter
            </a>
          </Typography>
        </Box>
        <Box>
          <Typography>
            © {new Date().getFullYear()} All rights reserved
          </Typography>
        </Box>
      </Box>
    </footer>
  ) : null;
};
