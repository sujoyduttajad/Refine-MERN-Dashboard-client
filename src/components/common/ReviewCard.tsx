import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Avatar,
  Rating,
} from "@pankod/refine-mui";

import { ReviewCardProps } from "interfaces/reviews";
import { formatter } from "utils/functions";

const photo =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ReviewCard = ({
  id,
  title,
  reviewer,
  rating,
  property,
  description,
  date,
}: ReviewCardProps) => {
  return (
    <Card
      component={Link}
      to={`/reviews/show/${id}`}
      elevation={0}
      sx={{
        maxWidth: "80vw", // make it responsive
        padding: "10px",
        cursor: "pointer",
        textDecoration: "none",
        backgroundColor: "#FAFAFA",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.5)",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="top"
          width="30%"
        >
          <Stack padding={2}>
            <Avatar
              src={photo}
              variant="rounded"
              alt="user-image"
              sx={{
                width: 80,
                height: 80,
              }}
            />
          </Stack>
          <Stack paddingTop={2}>
            <Typography fontSize={20} fontWeight={700} color="#11142d" mb={1}>
              {reviewer ? reviewer : "Random Person"}
            </Typography>
            <Typography fontSize={15} fontWeight={500} color="#11142d" mb={1}>
              Total Reviews: {12}
            </Typography>
          </Stack>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "15px",
            marginLeft: "4rem",
            paddingX: "5px",
            paddingBottom: 0,
            width: "80%",
          }}
        >
          <Stack
            direction="row"
            gap={5}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography fontSize={30} fontWeight={700} color="#11142d">
              {title}
            </Typography>
            <Rating
              name="ratings"
              value={Number(rating)}
              precision={0.5}
              readOnly
            />
          </Stack>

          <Box
            px={1.5}
            py={0.5}
            width="fit-content"
            borderRadius={1}
            bgcolor="#dadefa"
            height="100%"
          >
            <Typography fontSize={16} fontWeight={600} color="#475be8">
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ReviewCard;
