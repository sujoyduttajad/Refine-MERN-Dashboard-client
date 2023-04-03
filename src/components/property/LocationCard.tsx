import { Card, CardMedia } from "@pankod/refine-mui";
import mapNY from "../../assets/mapNY.png";

const LocationCard = () => {
  return (
    <Card
      variant="outlined"
      raised={true}
      sx={{
        minWidth: 275,
        borderRadius: "15px",
      }}
    >
      <CardMedia
        component="img"
        image={mapNY}
        alt="Location geo map"
        sx={{ height: "100%", width: "22rem", margin: 0 }}
      />
    </Card>
  );
};

export default LocationCard;
