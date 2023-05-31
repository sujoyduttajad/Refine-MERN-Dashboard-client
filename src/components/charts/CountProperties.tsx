import { Box, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { PropertiesPerMonth } from "./chart.config";

interface TotalProperties {
  monthNames: number[];
}

const CountProperties = ({ monthNames }: TotalProperties) => {
  const PropertiesAreaSeries = [
    {
      name: "Properties",
      data: monthNames,
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
        type="line"
        height={310}
        options={PropertiesPerMonth}
      />
    </Box>
  );
};

export default CountProperties;
