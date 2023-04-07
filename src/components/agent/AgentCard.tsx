import { AgentCardProp } from "interfaces/agent";
import { Email, LocationCity, Phone, Place } from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";
import InfoBar from "./InfoBar";

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";

    return `/agent/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      maxWidth={275}
      width="100%"
      borderRadius={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },
        alignItems: "center",
        justifyContent:"center",
        padding: "1rem",
        borderRadius: "10px",
        gap: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.5)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={avatar}
        alt={name}
        width={120}
        height={120}
        sx={{
          height: "7rem",
          width: "7rem",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        flex={1}
        gap={{ xs: 4, sm: 4 }}
      >
        {/* Name and Designation */}
        <Stack direction="column" alignItems="center" gap={0.5}>
          <Typography
            fontSize={22}
            fontWeight={700}
            textTransform="capitalize"
            color="#475be8"
          >
            {name}
          </Typography>
          <Typography fontSize={14} color="#808191">
            Real-Estate Agent
          </Typography>
        </Stack>
        {/* Agent Information */}
        <Stack
          direction="column"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={1.5}
        >
          <InfoBar
            icon={<Place sx={{ color: "#808191" }} />}
            content="New York, USA"
          />
          <InfoBar
            icon={<Phone sx={{ color: "#808191" }} />}
            content="+1 234 56 78"
          />
          <InfoBar
            icon={<LocationCity sx={{ color: "#808191" }} />}
            content={`${noOfProperties} Properties`}
          />
          <InfoBar
            icon={<Email sx={{ color: "#808191" }} />}
            content={email}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
