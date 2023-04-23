import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";
import { AgentCard, CustomButton } from "components";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";

const Agent = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box mb={5} padding={2}>
      <Stack direction="row" justifyContent="space-between" my={4}>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          Agents List
        </Typography>
        <CustomButton
          title="Add Agent"
          // handleClick={() => navigate("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
      <Box
        mt="20px"
        // maxWidth="fit-content"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "flex-start" }}
        alignItems="flex-start"
        flexWrap="wrap"
        gap={3}
      >
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent?.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agent;
