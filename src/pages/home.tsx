import { useList } from "@pankod/refine-core/dist/hooks";
// import { useList } from "@pankod/refine-core"
import {
  PieChart,
  PropertyCard,
  PropertyReferrals,
  TotalRevenue,
  TopAgent,
} from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";

// Dashboard page
const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          color={["#475be8", "#e4e8ef"]}
          series={[75, 25]}
        />
         <PieChart
          title="Properties for Rent"
          value={550}
          color={["#18C784", "#e4b8ef"]}
          series={[60, 40]}
        />
         <PieChart
          title="Total Customers"
          value={5684}
          color={["#FF7B00", "#F3EBCF"]}
          series={[68, 32]}
        />
         <PieChart
          title="Properties for Cities"
          value={445}
          color={["#FF3A3A", "#E9D8E0"]}
          series={[88, 22]}
        />
      </Box>
    </Box>
  );
};

export default Home;
