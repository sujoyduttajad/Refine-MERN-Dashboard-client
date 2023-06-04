import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { Error, Loading } from "components/common/Loading&Error";
import { ApexOptions } from "apexcharts";

const AgentContribution = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const agentData = data?.data.sort((a, b) => b.__v - a.__v).slice(0, 5) ?? [];

  const agentNames = agentData.map((el) => {
    const firstName = el.name.split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  });

  const noOfProperties = agentData.map((el) => el.allProperties.length);

  const AgentsRadialSeries = [
    {
      name: "Customers",
      data: noOfProperties,
    },
  ];

  const AgentsRadialChart: ApexOptions = {
    chart: {
      type: "radar",
      height: 350,
      toolbar: {
        autoSelected: "pan",
        show: false, // hide the download dropdown menu
      },
    },
    xaxis: {
      categories: agentNames,
    },
  };

  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#FAFAFA"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Agent Contribution
      </Typography>

      <ReactApexChart
        series={AgentsRadialSeries}
        type="radar"
        height={310}
        options={AgentsRadialChart}
      />
    </Box>
  );
};

export default AgentContribution;
