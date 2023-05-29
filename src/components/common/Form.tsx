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
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";
import { truncateText } from "utils/functions";

const Form = ({
  type,
  register,
  onFinish,
  queryResult,
  // alignment,
  // handleDetailsChange,
  formLoading,
  handleSubmit,
  handleImageChange,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} Property
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
              {queryResult?.data?.data.creator.name}
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
          <Stack direction="row" gap={4}>
            <FormControl sx={{ width: "60%" }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter property name
              </FormHelperText>
              <TextField
                fullWidth
                required
                placeholder="Floyd's Villa"
                id="outlined-basic"
                color="info"
                sx={{
                  backgroundColor: "#fff",
                }}
                variant="outlined"
                {...register("title", { required: true })}
              />
            </FormControl>
            {/* <FormControl sx={{ width: "40%" }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Detail Type
              </FormHelperText>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleDetailsChange}
                {...register("detailType", { required: true })}
              >
                <ToggleButton value="sale">Sale</ToggleButton>
                <ToggleButton value="rent">Rent</ToggleButton>
              </ToggleButtonGroup>
            </FormControl> */}
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
              Enter Description
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

          <Stack direction="row" gap={4}>
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
                defaultValue={
                  type === "Edit"
                    ? queryResult?.data?.data.propertyType
                    : "apartment"
                }
                {...register("propertyType", { required: true })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "40%" }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter property price(USD)
              </FormHelperText>
              <TextField
                required
                id="outlined-basic"
                color="info"
                type="number"
                placeholder="234000"
                sx={{
                  backgroundColor: "#fff",
                }}
                variant="outlined"
                {...register("price", { required: true })}
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
              Enter Location
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              placeholder="594 S Mapleton Dr, Los Angeles, CA 90024"
              sx={{
                backgroundColor: "#fff",
              }}
              variant="outlined"
              {...register("location", { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#11142d"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Property Photo
              </Typography>
              <Button
                component="label"
                variant="outlined"
                color="success"
                sx={{
                  width: "fit-content",
                  backgroundColor: "#fff",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: "break-all" }}
            >
              <strong>Image selected: </strong>{" "}
              {type === "Edit"
                ? truncateText(queryResult?.data?.data.photo, 20)
                : truncateText(propertyImage?.url || "NO IMAGE SELECTED", 20)}
            </Typography>
          </Stack>

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

export default Form;
