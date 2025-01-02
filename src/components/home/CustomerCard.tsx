import { Box, Stack, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { ColumnBarData } from "components/charts/chart.config";
import { generateRandomNumbers } from "utils/functions";

export const ColumnBarSeries = [
  {
    name: "Customers",
    data: generateRandomNumbers(),
  },
];

function updateColumnBar() {
  const currentMonth = new Date().getMonth();
  const randomValueLastMonth = Math.floor(Math.random() * (100 - 30 + 1)) + 30;

  ColumnBarSeries.forEach((series) => {
    const lastIndex = series.data.length - 1;
    if (
      series.data[lastIndex] &&
      lastIndex === currentMonth &&
      randomValueLastMonth < 100
    ) {
      if (series.name === "Customers") {
        series.data[lastIndex] += randomValueLastMonth;
      }
    } else {
      if (series.name === "Customers") {
        series.data.push(randomValueLastMonth);
      }
    }
  });
}

const CustomerCard = () => {
  // Update the revenue series data every hour
  setInterval(updateColumnBar, 60 * 60 * 1000);

  return (
    <Box>
      <Box
        display="flex"
        flexGrow={1}
        justifyContent={{ xs: "flex-start", sm: "space-evenly" }}
        flexWrap="wrap"
        gap={1}
        pb={2}
      >
        <Stack direction="row" gap={2} flexWrap="wrap">
          <Stack direction="column" gap={2}>
            <Typography fontSize={14} color="#808191">
              Customers per year
            </Typography>
            <Typography variant="h4">500K</Typography>
            <Typography fontSize={12} fontWeight={700} color="#18C346">
              21.77% 
            </Typography>
          </Stack>
          <Stack direction="column" gap={2}>
            <Typography fontSize={14} color="#808191">
              Customers per month
            </Typography>
            <Typography variant="h4">22</Typography>
            <Typography fontSize={12} fontWeight={700} color="#18C346">
              41.04%
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <ReactApexChart
            options={ColumnBarData}
            series={ColumnBarSeries}
            type="bar"
            height={250}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomerCard;
