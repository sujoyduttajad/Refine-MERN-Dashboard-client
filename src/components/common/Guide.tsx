import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@pankod/refine-mui";
import { screenShot_1 } from "assets";
import { ListCompProps } from "interfaces/guide";

const ListComp = ({ header, description, image, altTitle }: ListCompProps) => {
  return (
    <Stack>
      <Typography variant="h4">{header}</Typography>
      <Typography variant="body1">{description}</Typography>
      <ImageList>
        <ImageListItem>
          <img src={image} alt={altTitle} />
        </ImageListItem>
      </ImageList>
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
        description=""
        image={screenShot_1}
        altTitle="screenshot of Property navigation"
      />
    </Box>
  );
};

export default Guide;
