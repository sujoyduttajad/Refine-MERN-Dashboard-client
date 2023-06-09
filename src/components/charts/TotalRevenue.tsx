import { Box, Typography, Stack } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { TotalRevenueOptions } from "./chart.config";
import { arrowUp } from "assets";
import { formatter, generateRandomNumbers } from "utils/functions";

interface TotalPrice {
  totalPrice: number;
}
interface RevenueEntry {
  name: string;
  data: number[];
}

const TotalRevenueSeries: RevenueEntry[] = [
  {
    name: "Last Month",
    data: generateRandomNumbers(),
  },
  {
    name: "Running Month",
    data: generateRandomNumbers(),
  },
];

function updateRevenueSeries() {
  const currentMonth = new Date().getMonth();
  const randomValueLastMonth = Math.floor(Math.random() * 100);
  const randomValueRunningMonth = Math.floor(Math.random() * 100);

  TotalRevenueSeries?.forEach((series) => {
    const lastIndex = series.data.length - 1;
    if (series.data[lastIndex] && lastIndex === currentMonth) {
      if (series.name === "Last Month") {
        series.data[lastIndex] += randomValueLastMonth;
      } else if (series.name === "Running Month") {
        series.data[lastIndex] += randomValueRunningMonth;
      }
    } else {
      if (series.name === "Last Month") {
        series.data.push(randomValueLastMonth);
      } else if (series.name === "Running Month") {
        series.data.push(randomValueRunningMonth);
      }
    }
  });
}

const TotalRevenue = ({ totalPrice }: TotalPrice) => {
  const assetsValue = formatter.format(totalPrice).slice(0, -3);

  // Update the revenue series data every hour
  setInterval(updateRevenueSeries, 60 * 60 * 1000);

  return (
    <Box
      p={{ xs: 2, sm: 4 }}
      pl={{ xs: 2, sm: 4 }}
      flex={1}
      bgcolor="#FAFAFA"
      id="chart"
      display={{ xs: "none", sm: "flex" }}
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Assets <span>(USD)</span>
      </Typography>
      <Stack
        my="20px"
        direction={{ xs: "column", sm: "row" }}
        gap={4}
        flexWrap="wrap"
      >
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          {totalPrice ? assetsValue : "$236,535"}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <Box sx={{ fontSize: 20 }}>
            <img src={arrowUp} alt="up arrow icon" />
          </Box>
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={15} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
