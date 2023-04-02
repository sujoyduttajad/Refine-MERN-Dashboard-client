import {
    Card,
    CardContent,
    CardMedia,
  } from "@pankod/refine-mui";
  import mapNY from "../../assets/mapNY.png";

  const LocationCard = () => {
    return (
      <Card
        variant="outlined"
        raised={true}
        sx={{
          minWidth: 275,
        //   width: "100%",
          borderRadius: "20px",
        }}
      >
        {/* <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        > */}
          <CardMedia
            component="img"
            image={mapNY}
            alt="Location geo map"
            sx={{ height: "100%", width: "22rem", margin: 0 }}
          />
       
        {/* </CardContent> */}
      </Card>
    );
  };
  
  export default LocationCard;
  