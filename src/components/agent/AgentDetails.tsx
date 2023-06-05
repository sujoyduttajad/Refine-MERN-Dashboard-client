import { CheckCircleRounded } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@pankod/refine-mui";
import PieChart from "components/charts/PieChart";
import { AgentProperties } from "interfaces/common";
import { agentDetails } from "utils/infoContent";

const AgentDetails = ({ agentProperties }: AgentProperties) => {
  return (
    <Box
      bgcolor="#FCFCFC"
      margin={{ xs: 0.5, sm: 2 }}
      padding={4}
      marginBottom={0}
      paddingBottom={0}
      borderRadius={2}
      maxWidth="90rem"
      height="95%"
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

      {agentDetails.agentInfo?.map((ele, index) => (
        <Stack key={index} direction="row" justifyContent="flex-start" alignItems="center">
          <Stack direction="row" gap={3}>
            <CheckCircleRounded sx={{ color: "#475be8" }} />
            <Typography fontSize={16} fontWeight={600} color="#11142D">
              {ele.header}{" "}
            </Typography>
          </Stack>

          <Stack direction="row" gap={3} justifyContent="flex-start">
            <Stack direction="row"> : </Stack>
            <Typography>{ele.para}</Typography>
          </Stack>
        </Stack>
      ))}

      <Divider variant="inset" />

      <Stack>
        <Typography fontSize={23} fontWeight={700} color="#11142D">
          Agent Status
        </Typography>
        <Stack
          direction="row"
          gap={3}
          padding={3}
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <PieChart
            title="Total Listings"
            value={agentProperties ? agentProperties : 0}
            colors={["#0068D0", "#A9D4FF"]}
            series={[agentProperties, 100 - agentProperties]}
          />
          <PieChart
            title="Properties Sold"
            value={550}
            colors={["#02BD53", "#7AFEB3"]}
            series={[60, 40]}
          />
          <PieChart
            title="Properties Rent"
            value={300}
            colors={["#FF3A3A", "#FFC6C6"]}
            series={[30, 70]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentDetails;
