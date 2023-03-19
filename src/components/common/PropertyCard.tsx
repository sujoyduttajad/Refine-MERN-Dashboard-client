import React from "react";
import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";

import { PropertyCardProps } from "interfaces/property";
import { formatter } from "utils/functions";

const PropertyCard = ({
  id,
  title,
  price,
  location,
  photo,
}: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/${id}`}
      elevation={0}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card-image"
        sx={{
          borderRadius: "10px",
        }}
      />
      <CardContent>
        <Stack direction="column" gap={1}>
          <Typography>{title}</Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place sx={{ fontSize: 18, color: "#11142d", marginTop: 0.5 }} />
            <Typography>{location}</Typography>
          </Stack>
        </Stack>

        <Box>
          <Typography sx={{ textDecoration: 'none' }}>${formatter.format(Number(price))}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
