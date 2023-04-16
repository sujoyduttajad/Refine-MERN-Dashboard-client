import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Box,
  InputBase,
  Divider,
  List,
  ListItem,
} from "@pankod/refine-mui";

import { ColorModeContext } from "contexts";
import {
  ArrowCircleLeft,
  ArrowCircleLeftOutlined,
  NotificationsOutlined,
  Send,
} from "@mui/icons-material";
import { Paper } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";

export const Footer: React.FC = () => {
  const shouldRenderFooter = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderFooter ? (
    <footer
      style={{
        backgroundColor: "#475be8",
        color: "#fafafa",
        padding: 4,
        textAlign: "center",
        minHeight: "20vh",
        height: "fit-content",
      }}
    >
      <Box display="flex" flexDirection="column" gap={2} px={4} py={3} mb={3}>
        <Box
          display="flex"
          gap={2}
          mb={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h3">Sign up to our Newsletter</Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ color: "#eaeaea" }}
            >
              Stay up to date with the latest news, announcements, and articles.
            </Typography>
          </Stack>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                maxWidth: "20rem",
                border: "1px solid #fff",
                borderRadius: 1,
                padding: "4px 8px",
              }}
              placeholder="Your Email address"
              inputProps={{ "aria-label": "Email address" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <Send />
            </IconButton>
          </Paper>
        </Box>
        {/* 2nd row */}
        <Box>
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h5" fontWeight={600} mb={2}>
              Pages
            </Typography>
            <ListItem sx={{ paddingTop: 1 }}>
              <ArrowCircleLeftOutlined />
              <Link to={"/"} className="active-links">
                Dashboard
              </Link>
            </ListItem>
            <ListItem>
              <ArrowCircleLeftOutlined />
              <Link to={"/properties"} className="active-links">
                Properties
              </Link>
            </ListItem>
          </Stack>
        </Box>
        {/* 3rd row */}
        <Box>
          <Typography sx={{ color: "#fafafa" }}>
            Made with ❤️ by Sujoy
          </Typography>
          <Typography>
            Find me in{" "}
            <a
              href="https://github.com/sujoyduttajad"
              rel="noopener noreferrer"
              className="active-links"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/SujoyDutta4290"
              rel="noopener noreferrer"
              className="active-links"
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
