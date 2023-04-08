import { Box, Stack, Typography } from "@pankod/refine-mui";

const CustomerCard = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-evenly" gap={1}>
        <Stack direction="column" gap={2}>
          <Typography fontSize={14} color="#808191">
            Total Customers
          </Typography>
          <Typography variant="h4">500K</Typography>
          <Typography fontSize={12} fontWeight={700} color="#18C346">
            21.77%
          </Typography>
        </Stack>
        <Stack></Stack>
      </Box>
      <Box display="flex" justifyContent="space-evenly" gap={1}>
        <Stack direction="column" gap={2}>
          <Typography fontSize={14} color="#808191">
            Total Customers
          </Typography>
          <Typography variant="h4">500K</Typography>
          <Typography fontSize={12} fontWeight={700} color="#18C346">
            21.77%
          </Typography>
        </Stack>
        <Stack></Stack>
      </Box>
    </Box>
  );
};

export default CustomerCard;
