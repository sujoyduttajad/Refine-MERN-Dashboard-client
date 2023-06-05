import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import {
  BalconyOutlined,
  BathtubOutlined,
  Delete,
  Edit,
  KingBedOutlined,
  KitchenOutlined,
  Place,
  SquareFootOutlined,
  Star,
  WifiRounded,
} from "@mui/icons-material";
import { CustomButton, Facilities } from "components";
import { Error, Loading } from "components/common/Loading&Error";
import { formatter } from "utils/functions";

import LocationCard from "components/property/LocationCard";
import AgentInfoCard from "components/property/AgentInfoCard";

function checkImage(url: any) {
  let img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

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

  const creatorDetails = propertyDetails?.creator;

  const creatorLink = propertyDetails?.creator?._id;

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const isCurrentUser = user.email === propertyDetails.creator.email;

  const handleDeleteProperty = () => {
    const response = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (response) {
      mutate(
        {
          resource: "properties",
          id: id as string,
        },
        {
          onSuccess: () => {
            navigate("/properties");
          },
        }
      );
    }
  };

  const handleEditProperty = () => {
    isCurrentUser && navigate(`/properties/edit/${propertyDetails._id}`);
  };

  return (
    <Box
      borderRadius="15px"
      padding="10px 20px 40px 20px"
      bgcolor="#fcfcfc"
      width="fit-content"
      aria-label="main-box-wrapper"
      display="flex"
      flexDirection="column"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="nowrap"
      >
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          Property Details
        </Typography>
        {isCurrentUser ? (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-evenly"
            alignItems="center"
            gap={2}
          >
            {/* Edit Property */}
            <CustomButton
              type="button"
              title="Edit"
              backgroundColor="#475be8"
              color="#fcfcfc"
              heightValue="40px"
              paddingValue="1px 10px"
              fontSizeValue="16.5px"
              icon={<Edit />}
              handleClick={handleEditProperty}
            />
            {/* Delete Property */}
            <CustomButton
              type="button"
              title="Delete"
              backgroundColor="#EB5757"
              color="#fcfcfc"
              heightValue="40px"
              paddingValue="1px 10px"
              fontSizeValue="16.5px"
              icon={<Delete />}
              handleClick={handleDeleteProperty}
            />
          </Stack>
        ) : (
          ""
        )}
      </Stack>
      <Box
        aria-label="details-agent-wrapper"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Box
          mt="20px"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          gap={4}
          aria-label="property-details"
        >
          <Box flex={1} maxWidth="70rem">
            <img
              src={propertyDetails.photo}
              alt={propertyDetails.title}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              className="property_details-img"
            />
            <Box mt="15px">
              {/* Property Type and Rating */}
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
                  <strong>Property type: </strong>{" "}
                  {propertyDetails.propertyType}
                </Typography>
                <Stack direction="row">
                  <Typography fontWeight={700} color="#475be8" mr={1}>
                    1.2k{" "}
                  </Typography>
                  {/* Challenge is to make Rating dynamic */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />
                  ))}
                </Stack>
              </Stack>
              {/* Title and Location */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                mt={3}
              >
                <Box>
                  <Typography
                    fontSize={22}
                    fontWeight={700}
                    color="#11142d"
                    textTransform="capitalize"
                  >
                    {propertyDetails.title}
                  </Typography>
                  <Stack direction="row" mt={0.5} alignItems="center" gap={0.5}>
                    <Place sx={{ color: "#808191" }} />
                    <Typography fontSize={16} color="#808191">
                      {propertyDetails.location}
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={600} color="#475be8">
                    {formatter.format(propertyDetails.price).slice(0, -3)}
                  </Typography>
                </Box>
              </Stack>
              {/* Facillities */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                mt={5}
              >
                <Facilities />
                {/* Description */}
                <Box width="100%" display="flex" flexDirection="column" mt={5}>
                  <Typography
                    fontSize={22}
                    fontWeight={600}
                    color="#11142d"
                    textTransform="capitalize"
                  >
                    Description
                  </Typography>
                  <Box
                    aria-label="description"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    mt={2}
                    flexWrap="wrap"
                  >
                    <Typography>{propertyDetails.description}</Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Stack
          mt="20px"
          display="flex"
          flexDirection="column"
          gap={4}
          ml={{ xs: 0, sm: 2 }}
          aria-label="agent-details"
        >
          <AgentInfoCard
            image={creatorDetails.avatar}
            email={creatorDetails.email}
            name={creatorDetails.name}
            userEmail={user.email}
            creatorId={creatorLink}
            noOfProperties={creatorDetails?.allProperties.length}
          />
          <LocationCard />
          <CustomButton
            type="button"
            title="Book Now"
            backgroundColor="#475be8"
            color="#fcfcfc"
            heightValue="50px"
            widthValue="100%"
            paddingValue="1px 10px"
            fontSizeValue="16.5px"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
