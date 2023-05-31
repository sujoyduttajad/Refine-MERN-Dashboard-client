import { Stack } from '@pankod/refine-mui';
import { Box, Typography } from '@pankod/refine-mui';
import ReactApexChart from 'react-apexcharts';
import { PropertiesAreaSeries, PropertiesPerMonth } from './chart.config';

interface TotalPrice {
    totalPrice: number;
  }


const CountProperties = () => {
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
  )
}

export default CountProperties