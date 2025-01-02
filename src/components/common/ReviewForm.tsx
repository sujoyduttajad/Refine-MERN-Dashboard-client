import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
  CardMedia,
} from "@pankod/refine-mui";
import { Rating, SelectChangeEvent } from "@mui/material";
import CustomButton from "./CustomButton";
import { ReviewFormProps } from "interfaces/reviews";
import { SyntheticEvent, useState } from "react";
import { useParams } from "@pankod/refine-react-router-v6";
import { getSelectedPropertyData } from "utils/functions";

const ReviewForm = ({
  register,
  queryResult,
  formLoading,
  propertyList,
}: ReviewFormProps) => {
  const { id: property_Id } = useParams<{ id: string }>();

  // State for selected property
  const [selectedPropertyId, setSelectedPropertyId] = useState(property_Id);
  // State for rating
  const [rating, setRating] = useState<number | null>(null);

  // Get selected property data
  const selectedPropertyData = getSelectedPropertyData(
    selectedPropertyId,
    propertyList
  );

  // Handle property selection
  const handlePropertySelect = (event: SelectChangeEvent<string>) => {
    setSelectedPropertyId(event.target.value as string);
  };

  // Handle Rating
  const handleRating = (event: SyntheticEvent<Element, Event>, value: number | null) => {
    setRating(value); 
  };


  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Review
      </Typography>
      <Box
        mt={2.5}
        maxWidth="65rem"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fafafa"
      >
        <Stack direction="row" flexWrap="wrap">
          <Typography fontSize={16} mx={2} ml={0} textTransform="capitalize">
            <strong>Creator: </strong>
            {queryResult.name}
          </Typography>
        </Stack>

        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={4}
          >
            {/* Reviewer Section */}
            <Stack direction="column" alignItems="center" gap={2}>
              <Stack mt={5}>
                <CardMedia
                  component="img"
                  image={queryResult?.avatar}
                  alt="Reviewer Profile picture"
                  sx={{
                    height: "7rem",
                    width: "7rem",
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                />
              </Stack>
              <Stack margin={1.5} ml={2}>
                <Typography
                  variant="h6"
                  textTransform="capitalize"
                  fontWeight={800}
                  align="center"
                >
                  {queryResult.name}
                </Typography>
              </Stack>
            </Stack>

            {/* Dynamic Property Section */}
            <Stack direction="column" alignItems="center" gap={2}>
              {selectedPropertyId && selectedPropertyData ? (
                <Stack direction="column" alignItems="center">
                  <Typography margin={2} align="center">
                    <b>Selected Property:</b> {selectedPropertyData.propName}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={selectedPropertyData.photo}
                    alt={selectedPropertyData.propName}
                    sx={{
                      height: "15rem",
                      width: "30rem",
                      borderRadius: "8.5px",
                      objectFit: "cover",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                  />
                </Stack>
              ) : (
                <Stack direction="column" alignItems="center">
                  <Typography margin={2} align="center">
                    <b>Select a Property:</b>
                  </Typography>
                  <Select
                    value={selectedPropertyId ? selectedPropertyId : ""}
                    onChange={handlePropertySelect}
                    displayEmpty
                    sx={{ width: "15rem", textAlign: "center" }}
                  >
                    <MenuItem value="" disabled>
                      Choose a Property
                    </MenuItem>
                    {propertyList?.map((prop) => (
                      <MenuItem key={prop.id} value={prop.id}>
                        {prop.propName}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              )}
            </Stack>
          </Box>

          {/* Property Dropdown */}
          <FormControl sx={{ width: "60%" }}>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Select a Property:
            </FormHelperText>
            <Select
              value={selectedPropertyId ? selectedPropertyId : ""}
              onChange={handlePropertySelect}
              displayEmpty
              variant="outlined"
              color="info"
              required
              sx={{
                backgroundColor: "#fff",
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                Choose a Property
              </MenuItem>
              {propertyList?.map((prop) => (
                <MenuItem key={prop.id} value={prop.id}>
                  {prop.propName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Review Title */}
          <FormControl sx={{ width: "60%" }}>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Review Title
            </FormHelperText>
            <TextField
              fullWidth
              required
              placeholder="Best Mansion Ever!!"
              id="outlined-basic"
              color="info"
              sx={{
                backgroundColor: "#fff",
              }}
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>

          {/* Rating section */}
          <FormControl sx={{ width: "60%" }}>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Rating
            </FormHelperText>
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                size="large"
                precision={0.5}
                onChange={handleRating}
              />
            </Stack>
          </FormControl>

          {/* Review Description */}
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Review Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              style={{
                width: "100%",
                backgroundColor: "#fff",
                fontSize: "16px",
                borderColor: "rgba(0, 0, 0, 0.23)",
                borderRadius: 6,
                padding: 10,
                fontFamily: "'Manrope', sans-serif",
                color: "#11142d",
                resize: "vertical",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          {/* Submit Button */}
          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default ReviewForm;
