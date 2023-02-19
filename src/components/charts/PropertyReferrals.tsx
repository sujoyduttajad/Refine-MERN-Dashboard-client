import { Box, Typography, Stack } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants";

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>
    </Box>
  );
};

export default PropertyReferrals;
