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

import { ReviewFormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const ReviewForm = ({
  type,
  register,
  onFinish,
  queryResult,
  formLoading,
  handleSubmit,
  onFinishHandler,
}: ReviewFormProps) => {
  
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
            <Typography fontSize={16} mx={2}>
              <strong>Property Name: </strong>
              {queryResult?.data?.data.title}
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
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <Stack direction="column" gap={4}>
            <Stack>
              
              <Stack mt={5}>
                <CardMedia
                  component="img"
                  image={queryResult?.avatar}
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
                  {queryResult?.name}
                </Typography>
              </Stack>
            </Stack>
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
          </Stack>
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
                //   color: "#11142d",
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
