import { Stack, Typography } from "@pankod/refine-mui";
import { AgentBioProps } from "interfaces/common";
import React from "react";

const AgentBio = ({ id, email }: AgentBioProps) => {
  return (
    <>
      <Stack direction="row" gap="15px">
        <Typography fontSize={16} fontWeight={600} color="#11142D">
          Age :
        </Typography>
        <Typography fontSize={14} color="#808191">
          26
        </Typography>
      </Stack>
      <Stack direction="row" gap="15px">
        <Typography fontSize={16} fontWeight={600} color="#11142D">
          City :
        </Typography>
        <Typography fontSize={14} color="#808191">
          New York
        </Typography>
      </Stack>
      <Stack direction="row" gap="15px">
        <Typography fontSize={16} fontWeight={600} color="#11142D">
          Country :
        </Typography>
        <Typography fontSize={14} color="#808191">
          USA
        </Typography>
      </Stack>
      <Stack direction="row" gap="15px">
        <Typography fontSize={16} fontWeight={600} color="#11142D">
          Agent ID :
        </Typography>
        <Typography fontSize={14} color="#808191">
          {id}
        </Typography>
      </Stack>
      <Stack direction="row" gap="15px">
        <Typography fontSize={16} fontWeight={600} color="#11142D">
          Email :
        </Typography>
        <Typography fontSize={14} color="#808191">
          {email}
        </Typography>
      </Stack>
    </>
  );
};

export default AgentBio;
