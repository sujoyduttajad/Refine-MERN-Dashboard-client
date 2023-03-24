import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { AppBar, Stack, Toolbar, Typography, Avatar } from "@pankod/refine-mui";

import { ColorModeContext } from "contexts";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderHeader ? (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: "#E7E9FC" }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name ? (
              <Typography
                sx={{ textTransform: "capitalize" }}
                variant="subtitle2"
              >
                {user?.name}
              </Typography>
            ) : null}
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
