import { Box } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";

const ColumnBar = () => {
  return (
    <Box>
      <ReactApexChart
        options={ColumnBarData.options}
        series={ColumnBarData.series}
        type="bar"
        height={350}
      />
    </Box>
  );
};

export default ColumnBar;
