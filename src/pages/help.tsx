import { useOne } from "@pankod/refine-core";
import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { evoiaDark } from "assets";
import InfoSection from "components/common/InfoSection";
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
    
      <InfoSection 
        header="What is Evoia?"
        content={companyInfo.content}
        photo={evoiaDark}
        title="Brand logo"
      />
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
      <InfoSection 
        header="About the Creator"
        content={companyInfo.aboutMe}
        photo={owner?.avatar}
        title={owner?.name}
        flexDir="row-reverse"
      />
    </Box>
  );
};

export default HelpAndInfo;
