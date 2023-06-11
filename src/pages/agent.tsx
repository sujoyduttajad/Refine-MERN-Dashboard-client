import { useState } from "react";
import { Box, Stack, Typography, TextField } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";
import { AgentCard, CustomButton } from "components";
import { Add, Search } from "@mui/icons-material";
import Toasts from "components/common/Toasts";
// import { useNavigate } from "@pankod/refine-react-router-v6";

const Agent = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  const filteredAgents = allAgents.filter((agent) =>
    agent?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box mb={5} padding={2}>
      <Stack direction="row" justifyContent="space-between" my={4}>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          Agents List ({allAgents.length})
        </Typography>
        <CustomButton
          title="Add Agent"
          // handleClick={() => navigate("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
      <Stack width="80vw" maxWidth="40rem" gap={4} mb={4}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Agent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: <Search sx={{ color: "#475be8"}} />,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#475be8",
              },
              "&:hover fieldset": {
                borderColor: "#475be8",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#475be8",
              },
            },
          }}
        />
      </Stack>
      <Toasts message="Add Agent not implemented" />
      {filteredAgents.length === 0 ? (
        <Typography variant="body1">
          Search result doesn't matched any Agent.
        </Typography>
      ) : (
        <Box
          mt="20px"
          display="flex"
          flexDirection={{ xs: "row", sm: "row" }}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          flexWrap="wrap"
          gap={{ xs: 1, sm: 3 }}
        >
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent?._id}
              id={agent?._id}
              name={agent?.name}
              email={agent?.email}
              avatar={agent?.avatar}
              noOfProperties={agent?.allProperties.length}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Agent;
