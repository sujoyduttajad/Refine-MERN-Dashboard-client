import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { useList, useGetIdentity } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";
import { Link } from "@pankod/refine-react-router-v6";

const TopAgent = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });
  const { data: currentUser } = useGetIdentity();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const topAgents = data?.data.sort((a, b) => b.__v - a.__v).slice(0, 5) ?? [];

  const generateLink = (id: string, name: string) => {
    // if the name matches with the logged in user redirect to my-profile
    if (currentUser.name === name) return "/my-profile";
    else {
      return `/agents/show/${id}`;
    }
  };

  return (
    <Box width="100%">
      {topAgents.map((agent) => (
        <Box
          key={agent._id}
          component={Link}
          to={generateLink(agent._id, agent.name)}
          mb={0.2}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: "0.5rem",
              borderRadius: "20px",
              "&:hover": {
                background: "#E8E8E8",
              },
            }}
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
                  color="#333"
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
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TopAgent;
