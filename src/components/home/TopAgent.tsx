import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";

const TopAgent = () => {
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
            >
              <CardMedia
                component="img"
                image={agent.avatar}
                alt={agent.name}
                sx={{
                  height: "5rem",
                  width: "5rem",
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
              </Stack>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TopAgent;
