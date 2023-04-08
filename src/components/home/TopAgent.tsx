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
        <Box>
          <Stack>
            <CardMedia
              component="img"
              image={agent.avatar}
              alt={agent.name}
              width={90}
              height={90}
              sx={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Stack>
              <Typography
                textTransform="capitalize"
                fontSize={14}
                fontWeight={600}
              >
                {agent.name}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TopAgent;
