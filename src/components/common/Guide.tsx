import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@pankod/refine-mui";
import { screenShot_1, screenShot_2, screenShot_3 } from "assets";
import { ListCompProps } from "interfaces/guide";
import { guideLabel } from "utils/infoContent";

const ListComp = ({ header, description, image, altTitle }: ListCompProps) => {
  return (
    <Stack mt={3}>
      <Typography fontSize={20} fontWeight={700} color="#11142D">
        {header}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="flex-start"
        flexWrap="wrap"
        gap={2}
        mt={2}
      >
        <Box>
          <img src={image} alt={altTitle} />
        </Box>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Stack>
  );
};

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
