import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@pankod/refine-mui";
import { ColorModeContext } from "contexts";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { evoiaLight } from "assets";
import { Link } from "@pankod/refine-react-router-v6";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  // since we are using the dark/light toggle; we don't need to check if user is logged in or not.
  const shouldRenderHeader = true;
  const { mode, setMode } = useContext(ColorModeContext);

  return shouldRenderHeader ? (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: "#fafafa" }}
    >
      <Toolbar>
        <Stack display={{ xs: "flex", sm: "none" }} ml={4}>
          <Button
            fullWidth
            variant="text"
            disableRipple
            sx={{ paddingBottom: 0 }}
          >
            <Link to="/">
              <img src={evoiaLight} alt="Evoia" />
            </Link>
          </Button>
        </Stack>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
          height={{ xs: "100%", lg: "inherit" }}
          sx={{ fontSize: "12rem" }}
        >
          <Stack
            direction="row"
            gap={{ xs: "2px", sm: "16px" }}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
              }}
            >
              {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>

            <IconButton
              aria-label="notification"
              sx={{ marginRight: "0.5rem" }}
            >
              <NotificationsOutlined />
            </IconButton>
            <Stack>
              {user?.name ? (
                <Typography
                  sx={{ textTransform: "capitalize" }}
                  variant="subtitle2"
                  fontSize={16}
                  fontWeight={600}
                  display={{ xs: "none", sm: "flex" }}
                  color="#475be8"
                >
                  {user?.name}
                </Typography>
              ) : null}
              <Typography
                fontSize={12}
                fontWeight={500}
                color="#808191"
                display={{ xs: "none", sm: "flex" }}
                marginRight={{ xs: 1, sm: 0 }}
              >
                {user?.email === "sujoyduttajad@gmail.com"
                  ? "Admin"
                  : "Real-Estate Agent"}
              </Typography>
            </Stack>
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
