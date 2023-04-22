import { Box, Typography } from "@pankod/refine-mui";
import { linkInfo } from "utils/infoContent";

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
        {linkInfo.map((ele) => (
          <li key={ele.title}>
            <a href={ele.address} target="_blank" rel="noreferrer">
              {ele.title}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Resources;
