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
  Button,
} from "@pankod/refine-mui";

import { ColorModeContext } from "contexts";
import {
  ArrowCircleLeft,
  ArrowCircleLeftOutlined,
  GitHub,
  LinkedIn,
  NotificationsOutlined,
  Send,
  Twitter,
} from "@mui/icons-material";
import { Paper } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";
import { mediaInfo } from "utils/infoContent";
import { evoiaLight, evoiaWhite } from "assets";

export const Footer: React.FC = () => {
  const shouldRenderFooter = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderFooter ? (
    <Box>
      <footer
        style={{
          backgroundColor: "#475be8",
          color: "#fafafa",
          padding: "1rem",
          textAlign: "center",
          minHeight: "20vh",
          height: "fit-content",
          width: "100%",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          px={{ xs: 0, sm: 4 }}
          py={3}
          mb={3}
        >
          <Box
            display="flex"
            gap={2}
            mb={4}
            flexWrap="wrap"
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
                Stay up to date with the latest news, announcements, and
                articles.
              </Typography>
            </Stack>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: { xs: "100vw", sm: 360 },
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
          <Box
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            mb={4}
            width="100%"
            sx={{ color: "#ECEEEF", fontWeight: 600 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              mb={{ xs: 4, sm: 0 }}
            >
              <Button fullWidth variant="text" disableRipple>
                <Link to="/">
                  <img src={evoiaWhite} alt="Evoia" width={200} />
                </Link>
              </Button>
              <Typography fontSize={14}>
                Your one stop Property manager
              </Typography>
            </Box>
            <Box display="flex">
              <Stack direction="column" alignItems="flex-start">
                {mediaInfo.pages.map((item) => (
                  <ListItem sx={{ paddingTop: 1 }}>
                    <ArrowCircleLeftOutlined sx={{ paddingRight: 1 }} />
                    <Link to={item.address} className="active-links">
                      {item.title}
                    </Link>
                  </ListItem>
                ))}
              </Stack>

              <Stack direction="column" alignItems="flex-start">
                {mediaInfo.resources.map((item) => (
                  <ListItem sx={{ paddingTop: 1 }}>
                    <ArrowCircleLeftOutlined sx={{ paddingRight: 1 }} />
                    <Link to={item.address} className="active-links">
                      {item.title}
                    </Link>
                  </ListItem>
                ))}
              </Stack>

              <Stack direction="column" alignItems="flex-start">
                <ListItem sx={{ paddingTop: 1 }}>
                  <GitHub sx={{ paddingRight: 1 }} />
                  <a
                    href="https://github.com/sujoyduttajad/Refine-MERN-Dashboard-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="active-links"
                  >
                    GitHub
                  </a>
                </ListItem>
                <ListItem>
                  <Twitter sx={{ paddingRight: 1 }} />
                  <a
                    href="https://twitter.com/SujoyDutta4290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="active-links"
                  >
                    Twitter
                  </a>
                </ListItem>
                <ListItem>
                  <LinkedIn sx={{ paddingRight: 1 }} />
                  <a
                    href="https://www.linkedin.com/in/sujoy-dutta-b41746a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="active-links"
                  >
                    Linkedin
                  </a>
                </ListItem>
              </Stack>
            </Box>
          </Box>
          {/* 3rd row */}
          <Divider
            sx={{ height: 28, m: 0.5, borderColor: "#7A88EF" }}
            orientation="horizontal"
          />
          <Box
            sx={{ color: "#ECEEEF" }}
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            flexWrap="wrap"
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Box>
              <Typography>
                © {new Date().getFullYear()} All rights reserved
              </Typography>
            </Box>
            <Typography>Made with ❤️ by Sujoy</Typography>
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
        </Box>
      </footer>
    </Box>
  ) : null;
};
