import { Add } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Properties
        </Typography>
        <CustomButton 
          title="Add Property"
          handleClick={() => {}}
          backgroundColor="#475be8"
          color="fcfcfc"
          icon={<Add />}
        />
      </Stack>
    </Box>
  );
};

export default AllProperties;
