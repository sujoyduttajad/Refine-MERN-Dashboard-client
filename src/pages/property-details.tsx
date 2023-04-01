import React from "react";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import {
  ChatBubble,
  Delete,
  Edit,
  Phone,
  Place,
  Star,
} from "@mui/icons-material";
import { CustomButton } from "components";
import { Error, Loading } from "components/common/Loading&Error";

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
            <Stack>
              <Typography>{propertyDetails.propertyType}</Typography>
              <Box>
                {/* Challenge is to make Rating dynamic */}
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />
                ))}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
