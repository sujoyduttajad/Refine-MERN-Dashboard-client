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
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          Agents List
        </Typography>
        <CustomButton
          title="Add Agent"
          handleClick={() => navigate("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
      <Box
        mt="20px"
        maxWidth="fit-content"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
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
