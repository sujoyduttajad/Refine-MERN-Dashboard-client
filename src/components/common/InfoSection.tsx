import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui"
import { InfoProps } from "interfaces/infoSection"

const InfoSection = ({ header, content, photo, title,  direction}: InfoProps) => {
  return (
    <Box
    mt={2.5}
    maxWidth="65rem"
    borderRadius="15px"
    padding="20px"
    bgcolor="#fafafa"
  >
    <Typography variant="h5" fontWeight={500}>
      {header}
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
        {content}
      </Typography>
      <Box>
        <CardMedia
          component="img"
          image={photo}
          alt={title}
          height={120}
          sx={{
            borderRadius: "5px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Stack>
  </Box>
  )
}

export default InfoSection