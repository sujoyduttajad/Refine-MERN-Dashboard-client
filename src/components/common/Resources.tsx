import { Box, Typography } from "@pankod/refine-mui";

const Resources = () => {
  return (
    <Box
      mt={2.5}
      maxWidth="65rem"
      borderRadius="15px"
      padding="20px"
      bgcolor="#fafafa"
    >
      <Typography variant="h5" fontWeight={600} mb={3}>
        Property Links
      </Typography>
      <Typography fontSize={14}>
        {" "}
        Here are the links that you can go through to copy property information
        around the world{" "}
      </Typography>
      <ul>
        <li>
          <a
            href="https://www.realtor.com/"
            target="_blank"
          >
            Realtor.com 
          </a>
        </li>
        <li>
          <a
            href="https://www.sothebysrealty.com/eng"
            target="_blank"
          >
            Sotheby's International Realty
          </a>
        </li>
        <li>
          <a
            href="https://www.zillow.com/"
            target="_blank"
          >
            Zillow
          </a>
        </li>
        <li>
          <a
            href="https://www.jamesedition.com/"
            target="_blank"
          >
            JamesEdition Luxury Homes
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default Resources;
