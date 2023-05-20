import { CheckCircleRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import React from "react";
import { agentDetails } from "utils/infoContent";

const AgentDetails = () => {
  return (
    <Box
      bgcolor="#FCFCFC"
      margin={2}
      padding={4}
      borderRadius={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.5)",
        },
      }}
    >
      <Stack>
        <Typography fontSize={23} fontWeight={700} color="#11142D">
          Agent Details
        </Typography>
      </Stack>
      <Stack>
        <Typography>
          Talent customers tend to earn a basic salary in the range of $15,000
          to $35,000 per annum. However, talented customers also earn a
          commission for finding their client's work. Typically, agents receive
          around 10% of what the client is paid.
        </Typography>
      </Stack>

      {agentDetails.agentInfo?.map((ele) => (
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Stack direction="row" gap={3}>
            <CheckCircleRounded sx={{ color: "#475be8" }} />
            <Typography>{ele.header} </Typography>
          </Stack>
         
          <Stack direction="row" gap={3} justifyContent="flex-start">
          <Stack direction="row" >
            {" "}
            :{" "}
          </Stack>
            <Typography>{ele.para}</Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default AgentDetails;
