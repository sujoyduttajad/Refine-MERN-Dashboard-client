import React from "react";
import {
  Box,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";
import { MoreVert } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const option = "Agent Detail";

const TopAgent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log(allAgents);
  return (
    <Box>
      {allAgents.map((agent) => (
        <Box key={agent._id}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              gap={2}
            >
              <CardMedia
                component="img"
                image={agent.avatar}
                alt={agent.name}
                sx={{
                  height: "4.5rem",
                  width: "4.5rem",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
              <Stack direction="column">
                <Typography
                  textTransform="capitalize"
                  fontSize={18}
                  fontWeight={600}
                >
                  {agent.name}
                </Typography>
                <Typography
                  textTransform="capitalize"
                  fontSize={14}
                  color="#808191"
                  fontWeight={400}
                >
                  {agent.allProperties.length} Properties
                </Typography>
              </Stack>
            </Stack>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem
                selected={option === "Agent Detail"}
                onClick={handleClose}
              >
                Agent Details
              </MenuItem>
            </Menu>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TopAgent;
