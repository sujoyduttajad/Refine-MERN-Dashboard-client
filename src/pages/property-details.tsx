import React from "react";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import {
  BalconyOutlined,
  BathtubOutlined,
  ChatBubble,
  Delete,
  Edit,
  KingBedOutlined,
  KitchenOutlined,
  Phone,
  Place,
  SquareFootOutlined,
  Star,
  WifiRounded,
} from "@mui/icons-material";
import { CustomButton } from "components";
import { Error, Loading } from "components/common/Loading&Error";
import { formatter } from "utils/functions";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  // ID of the current resource we are trying to view
  const { id } = useParams();
  // To quickly delete a resource
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};
  console.log(propertyDetails);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfc"
      width="fit-content"
    >
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Details
      </Typography>

      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Box flex={1} maxWidth={764}>
          <img
            src={propertyDetails.photo}
            alt={propertyDetails.title}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            className="property_details-img"
          />

          <Box mt="15px">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography
                fontSize={18}
                fontWeight={500}
                color="#11142d"
                textTransform="capitalize"
              >
                <strong>Property type: </strong> {propertyDetails.propertyType}
              </Typography>
              <Box>
                {/* Challenge is to make Rating dynamic */}
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />
                ))}
              </Box>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Box>
                <Typography
                  fontSize={22}
                  fontWeight={600}
                  color="#767676"
                  textTransform="capitalize"
                >
                  {propertyDetails.title}
                </Typography>
                <Stack direction="row" mt={0.5} alignItems="center" gap={0.5}>
                  <Place sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color="#808191">
                    {propertyDetails.location}
                  </Typography>
                </Stack>
              </Box>

              <Box>
                <Typography variant="h4" fontWeight={600} color="#475be8">
                  {formatter.format(propertyDetails.price)}
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              mt={3}
            >
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
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    flexWrap="nowrap"
                  >
                    <KingBedOutlined sx={{ color: "#808191" }} />
                    <Typography fontSize={18} fontWeight={500} color="#11142d">
                      4 Beds
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    flexWrap="nowrap"
                  >
                    <BathtubOutlined sx={{ color: "#808191" }} />
                    <Typography fontSize={18} fontWeight={500} color="#11142d">
                      2 Baths
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    flexWrap="nowrap"
                  >
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
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    flexWrap="nowrap"
                  >
                    <KitchenOutlined sx={{ color: "#808191" }} />
                    <Typography fontSize={18} fontWeight={500} color="#11142d">
                      1 Kitchen
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    flexWrap="nowrap"
                  >
                    <BalconyOutlined sx={{ color: "#808191" }} />
                    <Typography fontSize={18} fontWeight={500} color="#11142d">
                      1 Balcony
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    flexWrap="nowrap"
                  >
                    <WifiRounded sx={{ color: "#808191" }} />
                    <Typography fontSize={18} fontWeight={500} color="#11142d">
                      Wifi included
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
