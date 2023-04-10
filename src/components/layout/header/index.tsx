import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
} from "@pankod/refine-mui";

import { ColorModeContext } from "contexts";
import { NotificationsOutlined } from "@mui/icons-material";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderHeader ? (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: "#fafafa" }}
    >
      <Toolbar>
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
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
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
              <Typography fontSize={12} fontWeight={500} color="#808191">
                {user?.name === "sujoy dutta" ? "Admin" : "Real-Estate Agent"}
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
