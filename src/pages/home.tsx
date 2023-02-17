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
        <PieChart />
      </Box>
    </Box>
  );
};

export default Home;
