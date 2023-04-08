import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { PropertyListValues } from "interfaces/property";

const SalesCard = ({ creator, title, photo, price, location  }: PropertyListValues ) => {
    
  return (
   
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" justifyContent="flex-start">
          <CardMedia 
          component="img"
        //   image={property.avatar}
        //   alt={agent.name}
          sx={{
            height: "4.5rem",
            width: "4.5rem",
            borderRadius: "20px",
            objectFit: "cover",
          }}
          />
          <Stack>
            <Typography>Metro Jay Apartment</Typography>
            <Typography></Typography>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Box>
   
  );
};

export default SalesCard;
