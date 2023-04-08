import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";

const SalesCard = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" justifyContent="flex-start">
          <CardMedia />
          <Stack>
            <Typography>Metro Jay Apartment</Typography>
            <Typography></Typography>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Box>
    </Box>
  );
};

export default SalesCard;
