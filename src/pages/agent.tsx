import React from "react";
import { Box, Typography } from "@pankod/refine-mui";
import AgentCard from "components/property/AgentCard";
import { useList } from "@pankod/refine-core";

const Agent = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  console.log(allAgents);
  return <div>agent</div>;
};

export default Agent;
