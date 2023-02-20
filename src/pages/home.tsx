
import { useList } from "@pankod/refine-core"
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
          colors={["#475be8", "#D7DBFA"]}
          series={[75, 25]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          colors={["#18C784", "#C9F8E6"]}
          series={[60, 40]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          colors={["#FF7B00", "#FFE3C8"]}
          series={[68, 32]}
        />
        <PieChart
          title="Properties for Cities"
          value={445}
          colors={["#FF3A3A", "#FFD4D4"]}
          series={[88, 22]}
        />
      </Box>

      <Stack 
        mt="25px" 
        width={"100%"} 
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Home;
