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
  ToggleButtonGroup,
  ToggleButton,
  CardMedia,
} from "@pankod/refine-mui";

import CustomButton from "./CustomButton";
import { ReviewFormProps } from "interfaces/reviews";
import { useState } from "react";
import { useNavigate, useParams } from "@pankod/refine-react-router-v6";
import { useNavigation } from "@pankod/refine-core";

const ReviewForm = ({
  type,
  register,
  //   onFinish,
  queryResult,
  formLoading,
  //   handleSubmit,
  propertyList,
}: //   onFinishHandler,
ReviewFormProps) => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const { id: property_Id}  = useParams();


  const handleSelectProperty = (propertyId: string) => {
    setSelectedProperty(propertyId);
  };

  // Find the selected property based on the selectedProperty ID
  const selectedPropertyData = propertyList?.find(
    (prop) => prop.id === selectedProperty
  );

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} Review
      </Typography>
      <Box
        mt={2.5}
        maxWidth="65rem"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fafafa"
      >
        {type === "Edit" ? (
          <Stack direction="row" flexWrap="wrap">
            <Typography fontSize={16} mx={2} ml={0} textTransform="capitalize">
              <strong>Creator: </strong>
              {queryResult?.name}
            </Typography>
          </Stack>
        ) : (
          ""
        )}

        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          //   onSubmit={handleSubmit(onFinishHandler)}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={4}
          >
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
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
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
                  {queryResult?.name}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" gap={2}>
              {selectedPropertyData && selectedPropertyData.photo && (
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
              )}
            </Stack>
          </Box>

          {/* Select the Property to Review */}
          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Select Property Type
            </FormHelperText>
            <Select
              variant="outlined"
              color="info"
              displayEmpty
              required
              sx={{
                backgroundColor: "#fff",
              }}
              inputProps={{ "aria-label": "Without label" }}
              value={selectedProperty || ""}
              onChange={(e) => handleSelectProperty(e.target.value)}
              //   defaultValue={
              //     type === "Edit"
              //       ? queryResult?.data?.data.propertyType
              //       : "apartment"
              //   }
              //   {...register("propertyType", { required: true })}
            >
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
              Review
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
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
