import { Box, Stack, Typography } from "@pankod/refine-mui";

const HelpAndInfo = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Help & Information Booth
      </Typography>
      <Box
        mt={2.5}
        maxWidth="65rem"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fafafa"
      >
        <Stack direction={{xs: "column", sm: "row"}} >
            <Typography>What is Evoia</Typography>
            <Typography></Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HelpAndInfo;
