import { Box, Stack, Typography } from "@pankod/refine-mui";
import { companyInfo } from "utils/infoContent";

const HelpAndInfo = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Help & Information
      </Typography>
      <Box
        mt={2.5}
        maxWidth="65rem"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fafafa"
      >
        <Typography variant="h5">What is Evoia?</Typography>
        <Stack direction={{xs: "column", sm: "row"}} mt={3}>           
            <Typography variant="body1">{companyInfo.content}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HelpAndInfo;
