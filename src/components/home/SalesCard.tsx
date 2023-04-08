import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { PropertyListValues } from "interfaces/property";
import { formatter } from "utils/functions";

const SalesCard = ({
  creator,
  title,
  photo,
  price,
  location,
}: PropertyListValues) => {
  const priceDisplay = formatter.format(price).slice(0, -3);
  return (
    <Box display="flex" justifyContent="space-between">
      <Stack direction="row" justifyContent="flex-start" gap={2}>
        <CardMedia
          component="img"
          image={photo}
          alt={title}
          sx={{
            height: "4.5rem",
            width: "4.5rem",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
        <Stack direction="column" gap={1}>
          <Typography fontSize={18} fontWeight={600} color="#11142d">
            {title}
          </Typography>
          <Box
            px={1.5}
            py={0.5}
            width="fit-content"
            borderRadius={1}
            bgcolor="#dadefa"
            // height="100%"
          >
            <Typography fontSize={16} fontWeight={700} color="#475be8">
              {priceDisplay}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Box>
  );
};

export default SalesCard;
