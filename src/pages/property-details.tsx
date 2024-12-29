import {
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import {
  BalconyOutlined,
  BathtubOutlined,
  ChatOutlined,
  Delete,
  Edit,
  KingBedOutlined,
  KitchenOutlined,
  Place,
  SquareFootOutlined,
  Star,
  ThumbDown,
  ThumbUp,
  WifiRounded,
} from "@mui/icons-material";
import { CustomButton, Facilities } from "components";
import { Error, Loading } from "components/common/Loading&Error";
import { formatter, formatTimestamp } from "utils/functions";

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

  // Created timestamp variable to convert timestamp into formatted date & time
  const timestamp = formatTimestamp(propertyDetails.updatedAt);

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

  const handleAddReviewProperty = () => {
    isCurrentUser && navigate(`/reviews/create/${propertyDetails._id}`);
    // navigate(`/reviews/create`);
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
                    <Typography color="#333">
                      {propertyDetails.description}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    mt={2.5}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      color="#343434"
                    >
                      {"Last Updated -  "}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      color="#475be8"
                    >
                      {timestamp}
                    </Typography>
                  </Box>
                </Box>
                {/* Reviews */}
                <Box width="100%" display="flex" flexDirection="column" mt={5}>
                  <Typography
                    fontSize={22}
                    fontWeight={600}
                    color="#11142d"
                    textTransform="capitalize"
                    mb={3}
                  >
                    Reviews
                  </Typography>
                  <Card
                    variant="outlined"
                    sx={{
                      minWidth: 275,
                      width: "100%",
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                      }}
                    >
                      <Box
                        aria-label="description"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        mt={2}
                      >
                        <Stack mt={5}>
                          <CardMedia
                            component="img"
                            image={creatorDetails.avatar}
                            alt="Reviewer Profile picture"
                            sx={{
                              height: "7rem",
                              width: "7rem",
                              borderRadius: "50%",
                            }}
                          />
                        </Stack>
                        <Stack margin={1.5} ml={2}>
                          <Typography
                            variant="h6"
                            textTransform="capitalize"
                            fontWeight={800}
                          >
                            {creatorDetails.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            textTransform="capitalize"
                            fontWeight={600}
                            color="#475be8"
                          >
                            {propertyDetails.title}
                          </Typography>
                          <Stack direction="row">
                            {/* For now a random number represents the rating but later on it would be fetched too */}
                            <Typography fontWeight={700} color="#475be8" mr={1}>
                              {Math.floor(Math.random() * 9) + 1}
                              {"k "}
                            </Typography>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={`star-${star}`}
                                sx={{ color: "#f2c94c" }}
                              />
                            ))}
                          </Stack>
                          <Typography color="#333" mt={2}>
                            This mansion is the epitome of luxury, with marble
                            floors, crystal chandeliers, and breathtaking
                            indoor-outdoor living spaces. The infinity pool
                            overlooking a private lake, a spa-like master suite,
                            and top-tier amenities like a home theater, wine
                            cellar, and gym make it a dream home. Every detail
                            is crafted for comfort and elegance—perfect for
                            those who demand the very best.
                          </Typography>
                        </Stack>
                      </Box>
                      <Stack direction="row" mt={3} alignItems="center" gap={2}>
                        {/* Like */}
                        <CustomButton
                          type="button"
                          title="Like"
                          backgroundColor="#475be8"
                          color="#fcfcfc"
                          heightValue="40px"
                          paddingValue="1px 10px"
                          fontSizeValue="16.5px"
                          icon={<ThumbUp />}
                        />
                        {/* Dislike */}
                        <CustomButton
                          type="button"
                          title="Dislike"
                          backgroundColor="#475be8"
                          color="#fcfcfc"
                          heightValue="40px"
                          paddingValue="1px 10px"
                          fontSizeValue="16.5px"
                          icon={<ThumbDown />}
                        />
                        {/* DM button */}
                        <CustomButton
                          type="button"
                          title="Direct Message"
                          backgroundColor="#475be8"
                          color="#fcfcfc"
                          heightValue="40px"
                          paddingValue="1px 10px"
                          fontSizeValue="16.5px"
                          icon={<ChatOutlined />}
                          
                        />
                      </Stack>
                    </CardContent>
                  </Card>
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
          {/* Book now button */}
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
          {/* Review Button */}
          <CustomButton
            type="button"
            title="Add Review"
            backgroundColor="#475be8"
            color="#fcfcfc"
            heightValue="50px"
            widthValue="100%"
            paddingValue="1px 10px"
            fontSizeValue="16.5px"
            handleClick={handleAddReviewProperty}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
