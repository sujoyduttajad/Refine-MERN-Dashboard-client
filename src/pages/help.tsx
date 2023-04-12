import { useOne } from "@pankod/refine-core";
import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { evoiaDark } from "assets";
import { Error, Loading } from "components/common/Loading&Error";
import { companyInfo } from "utils/infoContent";

const HelpAndInfo = () => {
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: "64117ddfcf0c47761e01b1c4",
  });

  const owner = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

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
          </Typography>
          <Box
            width="fit-content"
          >
            <CardMedia
              component="img"
              image={owner?.avatar}
              alt={owner?.name}
              height={120}
              sx={{
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default HelpAndInfo;
