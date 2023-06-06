import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { screenShot_1, screenShot_2, screenShot_3 } from "assets";
import { ListCompProps } from "interfaces/guide";
import { guideLabel } from "utils/infoContent";

const ListComp = ({ header, description, image, altTitle }: ListCompProps) => {
  return (
    <Stack mt={3}>
      <Typography fontSize={18} fontWeight={500} color="#11142D">
        {header}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mt={2}
      >
        <Box>
          <CardMedia
            component="img"
            image={image}
            alt={altTitle}
            height="fit-content"
            sx={{
              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box>
        <Typography variant="body1">{description}</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

const Guide = () => {
  return (
    <Box
      mt={2.5}
      borderRadius="15px"
      padding="20px"
      bgcolor="#fafafa"
      color="#333"
    >
      <Typography variant="h5" fontWeight={600} mb={3}>
        How to upload properties?
      </Typography>
      <Typography fontSize={14}>
        {" "}
        This is a step by step guide on how to upload properties with proper
        details in their proper place. Also folllow the links below this guide
        to get property informations{" "}
      </Typography>
      <ListComp
        header="Step-1"
        description={guideLabel.desc1}
        image={screenShot_1}
        altTitle="screenshot of Property navigation"
      />
      <ListComp
        header="Step-2"
        description={guideLabel.desc2}
        image={screenShot_2}
        altTitle="screenshot of add property button"
      />
      <ListComp
        header="Step-3"
        description={guideLabel.desc3}
        image={screenShot_3}
        altTitle="screenshot of create property form"
      />
    </Box>
  );
};

export default Guide;
