import { Box, Stack, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { ColumnBarData as data } from "components/charts/chart.config";
import { ColumnBarSeries as series } from "components/charts/chart.config";

const CustomerCard = () => {
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
              Total Customers
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
            options={data}
            series={series}
            type="bar"
            height={250}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomerCard;
