import { Box, Stack, Typography } from "@pankod/refine-mui";
import { termsAndConditions } from "utils/infoContent";

const LegalTerms = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d" my={3}>
        Legal Terms & Conditions
      </Typography>
      <Stack
        p={2}
        borderRadius={4}
        color="#5B5C5D"
        sx={{ border: "1px solid #eee" }}
      >
        {termsAndConditions.map((content) => (
          <Box>
            <Typography variant="h5" fontWeight={700} mb={1}>
              {content.header}
            </Typography>
            <Typography mb={2}>{content.para}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default LegalTerms;
