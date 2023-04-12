import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { evoiaDark } from "assets";
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
        <Typography variant="h5" fontWeight={500}>What is Evoia?</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} mt={3}>
          <Typography
            variant="body1"
            flexWrap="wrap"
            maxWidth="40rem"
            width="100%"
            pr={{xs: 0, sm: 2}}
            pt={{xs: 2, sm: 0}}
          >
            {companyInfo.content}
          </Typography>
          <Box>
          <CardMedia
            component="img"
            image={evoiaDark}
            alt={"Brand logo"}
            // width={70}
            height={120}
            sx={{
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default HelpAndInfo;
