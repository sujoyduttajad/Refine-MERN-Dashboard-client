import { Typography, Box, Stack } from "@pankod/refine-mui";
import {
  BalconyOutlined,
  BathtubOutlined,
  KingBedOutlined,
  KitchenOutlined,
  SquareFootOutlined,
  WifiRounded,
} from "@mui/icons-material";

const Facilities = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Typography
        fontSize={22}
        fontWeight={600}
        color="#11142d"
        textTransform="capitalize"
      >
        Facillity
      </Typography>
      {/* 1st row of Facillities */}
      <Box
        aria-label="facility-column"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={5}
        mt={3}
        flexWrap="wrap"
      >
        <Stack direction="row" alignItems="center" gap={2} flexWrap="nowrap">
          <KingBedOutlined sx={{ color: "#808191" }} />
          <Typography fontSize={18} fontWeight={500} color="#11142d">
            4 Beds
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2} flexWrap="nowrap">
          <BathtubOutlined sx={{ color: "#808191" }} />
          <Typography fontSize={18} fontWeight={500} color="#11142d">
            2 Baths
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2} flexWrap="nowrap">
          <SquareFootOutlined sx={{ color: "#808191" }} />
          <Typography fontSize={18} fontWeight={500} color="#11142d">
            28M Area
          </Typography>
        </Stack>
      </Box>
      {/* 2nd Row of Facillities */}
      <Box
        aria-label="facility-column2"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={5}
        mt={3}
        flexWrap="wrap"
      >
        <Stack direction="row" alignItems="center" gap={2} flexWrap="nowrap">
          <KitchenOutlined sx={{ color: "#808191" }} />
          <Typography fontSize={18} fontWeight={500} color="#11142d">
            1 Kitchen
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2} flexWrap="nowrap">
          <BalconyOutlined sx={{ color: "#808191" }} />
          <Typography fontSize={18} fontWeight={500} color="#11142d">
            1 Balcony
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2} flexWrap="nowrap">
          <WifiRounded sx={{ color: "#808191" }} />
          <Typography fontSize={18} fontWeight={500} color="#11142d">
            Wifi included
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Facilities;
