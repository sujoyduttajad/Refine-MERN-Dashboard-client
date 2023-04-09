import { Box, Stack, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";

const CustomerCard = ({ data }) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        gap={1}
        pb={2}
        sx={{
          "&:first-of-type": {
            borderBottom: "2px solid #DBDBE0",
          },
        }}
      >
        <Stack direction="column" gap={2}>
          <Typography fontSize={14} color="#808191">
            Total Customers
          </Typography>
          <Typography variant="h4">500K</Typography>
          <Typography fontSize={12} fontWeight={700} color="#18C346">
            21.77%
          </Typography>
        </Stack>
        <Stack>
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="bar"
            height={350}
          />
        </Stack>
      </Box>
      <Box display="flex" justifyContent="space-evenly" gap={1} mt={2}>
        <Stack direction="column" gap={2}>
          <Typography fontSize={14} color="#808191">
            New Customers This Month
          </Typography>
          <Typography variant="h4">12K</Typography>
          <Typography fontSize={12} fontWeight={700} color="#18C346">
            41.04%
          </Typography>
        </Stack>
        <Stack></Stack>
      </Box>
    </Box>
  );
};

export default CustomerCard;
