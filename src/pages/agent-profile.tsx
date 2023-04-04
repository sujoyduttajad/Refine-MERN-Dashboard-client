import React from "react";
import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";
import AgentCard from "components/property/AgentCard";

const AgentProfile = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data;
  
  return <div>agent-profile</div>;
};

export default AgentProfile;
