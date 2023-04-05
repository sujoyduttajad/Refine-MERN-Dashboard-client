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

  return <div>agent</div>;
};

export default Agent;
