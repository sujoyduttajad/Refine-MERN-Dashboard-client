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

import { ReviewCardProps } from "interfaces/reviews";
import { formatter } from "utils/functions";

const ReviewCard = ({
  id,
  title,
  reviewer,
  rating,
  comment,
  date,
}: ReviewCardProps) => {

  return (
    <Card
      component={Link}
      to={`/reviews/show/${id}`}
      elevation={0}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        cursor: "pointer",
        textDecoration: "none",
        backgroundColor: "#FAFAFA",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.5)",
        },
      }}
    >
      {/* <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card-image"
        sx={{
          borderRadius: "10px",
        }}
      /> */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "15px",
          paddingX: "5px",
          paddingBottom: 0,
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={18} fontWeight={600} color="#11142d">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place sx={{ fontSize: 18, color: "#11142d", marginTop: 0.5 }} />
            <Typography fontSize={14} color="#808191">
              {reviewer}
            </Typography>
          </Stack>
        </Stack>

        <Box
          px={1.5}
          py={0.5}
          width="fit-content"
          borderRadius={1}
          bgcolor="#dadefa"
          height="100%"
        >
          <Typography fontSize={18} fontWeight={700} color="#475be8">
            {comment}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
