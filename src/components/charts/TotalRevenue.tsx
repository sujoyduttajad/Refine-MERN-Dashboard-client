import { Box, Typography, Stack } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import { arrowUp } from "assets";
import { formatter } from "utils/functions";

interface TotalPrice {
  totalPrice: number;
}

const TotalRevenue = ({ totalPrice }: TotalPrice) => {
  const assetsValue = formatter.format(totalPrice).slice(0, -3);
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#FAFAFA"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      width={{ xs: "100vw", sm: "30vw"}}
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Assets <span>(USD)</span>
      </Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          {totalPrice ? assetsValue : "$236,535"}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          {/* <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} /> */}
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
