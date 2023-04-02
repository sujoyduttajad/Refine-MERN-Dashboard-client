import {
    Typography,
    Stack,
    Card,
    CardContent,
    CardMedia,
  } from "@pankod/refine-mui";
  import { ChatOutlined, Phone, Place } from "@mui/icons-material";
  import { CustomButton } from "components";
  import mapNY from "../../assets/mapNY.png";

  const LocationCard = () => {
    return (
      <Card
        variant="outlined"
        raised={true}
        sx={{
          minWidth: 275,
          width: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={mapNY}
            alt="Location geo map"
            sx={{ height: "7rem", width: "7rem", borderRadius: "50%" }}
          />
       
        </CardContent>
      </Card>
    );
  };
  
  export default LocationCard;
  