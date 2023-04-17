import React from "react";
import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";
import ThreeDotsMenu from "components/common/ThreeDotsMenu";
// import { useNavigate } from "@pankod/refine-react-router-v6";

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

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const topAgents = data?.data.sort((a, b) => b.__v - a.__v).slice(0, 4) ?? [];

  // const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate("/properties/create");
  };

  return (
    <Box width="100%">
      {topAgents.map((agent) => (
        <Box
          key={agent._id}
          mb={1.5}
          sx={{
            padding: "0.5rem",
            borderRadius: "20px",
            "&:hover": {
              background: "#FAFAFA",
            },
          }}
        >
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
            <ThreeDotsMenu
              option="Agent Detail"
              open={open}
              value="Agent Detail"
              menuId="agent-button"
              anchorEl={anchorEl}
              handleClick={handleClick}
              handleClose={handleClose}
              handleNavigate={handleNavigate}
            />
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TopAgent;
