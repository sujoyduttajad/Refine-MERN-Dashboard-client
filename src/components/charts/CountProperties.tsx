import { Box, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { PropertiesPerMonth } from "./chart.config";

interface TotalProperties {
  propertiesPerMonth: number[];
}

const CountProperties = ({ propertiesPerMonth }: TotalProperties) => {
  const PropertiesAreaSeries = [
    {
      name: "Properties",
      data: propertiesPerMonth,
    },
  ];

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
        Properties per month
      </Typography>

      <ReactApexChart
        series={PropertiesAreaSeries}
        type="area"
        height={310}
        options={PropertiesPerMonth}
      />
    </Box>
  );
};

export default CountProperties;
