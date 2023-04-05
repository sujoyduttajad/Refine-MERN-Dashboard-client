import React from "react";
import { Box, Typography } from "@pankod/refine-mui";
import AgentCard from "components/property/AgentCard";
import { useList } from "@pankod/refine-core";
import { Error, Loading } from "components/common/Loading&Error";

const Agent = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d" >
        Agents List
      </Typography>

      <Box
        mt="20px"
        sx={{ 
          display: "flex",
          flexWrap: 'wrap',
          gap: '20px',
          backgroundColor: '#fcfcfc'
        }}
      >

      </Box>
    </Box>
  );
};

export default Agent;
