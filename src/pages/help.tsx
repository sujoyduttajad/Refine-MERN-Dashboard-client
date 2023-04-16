import { useOne } from "@pankod/refine-core";
import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";
import { evoiaDark } from "assets";
import { Guide } from "components";
import { Error, Loading } from "components/common/Loading&Error";
import { companyInfo } from "utils/infoContent";

const HelpAndInfo = () => {

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Help & Information
      </Typography>
      {/* Company */}
      <Box
        mt={2.5}
        maxWidth="65rem"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fafafa"
      >
        <Typography variant="h5" fontWeight={500}>
          What is Evoia?
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} mt={3}>
          <Typography
            variant="body1"
            flexWrap="wrap"
            maxWidth="40rem"
            width="100%"
            pr={{ xs: 0, sm: 2 }}
            pt={{ xs: 2, sm: 0 }}
          >
            {companyInfo.content}
          </Typography>
          <Box>
            <CardMedia
              component="img"
              image={evoiaDark}
              alt={"Brand logo"}
              height={120}
              sx={{
                borderRadius: "5px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Stack>
      </Box>
      {/* Creator */}
      <Box
        mt={2.5}
        maxWidth="65rem"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fafafa"
      >
        <Typography variant="h5" fontWeight={500}>
          About the Creator
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row-reverse" }}
          justifyContent={{ xs: "flex-start", sm: "space-between" }}
          mt={3}
        >
          <Typography
            variant="body1"
            flexWrap="wrap"
            // maxWidth="40rem"
            width="100%"
            pl={{ xs: 0, sm: 2 }}
            pt={{ xs: 2, sm: 0 }}
          >
            {companyInfo.aboutMe}
            <a
              href="https://twitter.com/SujoyDutta4290"
              type="_blank"
              style={{
                padding: "0 3px",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Twitter
            </a>
            <a
              href="https://github.com/sujoyduttajad"
              type="_blank"
              style={{
                padding: "0 3px",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              GitHub
            </a>
          </Typography>
          <Box width="fit-content">
            <CardMedia
              component="img"
              image={"https://lh3.googleusercontent.com/a/AGNmyxYiAYh3jH0SrrzDl1MFnxhB9bgdBzIr1NIZn1CTTA=s288"}
              alt="Profile photo"
              height={120}
              sx={{
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </Box>
      {/* Step by Step Guide */}
      <Guide />
    </Box>
  );
};

export default HelpAndInfo;
