import { Box, Stack, Typography } from "@pankod/refine-mui";
import React from "react";

const Guide = () => {
  return (
    <Box
      mt={2.5}
      maxWidth="65rem"
      borderRadius="15px"
      padding="20px"
      bgcolor="#fafafa"
    >
      <Typography variant="h5" fontWeight={500}>
        Step-by-step guide
      </Typography>
      <Stack></Stack>
    </Box>
  );
};

export default Guide;
