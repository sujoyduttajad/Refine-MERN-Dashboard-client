import { AgentCardProp } from "interfaces/agent";
import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
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
      width="100%"
      borderRadius={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "flex-start" },
        padding: "20px",
        gap: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.5)",
        },
      }}
    >
      <img
        src={avatar}
        alt={name}
        width={120}
        height={120}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
        flex={1}
        gap={{ xs: 4, sm: 4 }}
      >
        <Stack direction="column" alignItems="flex-start" gap={0.5}>
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
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="center"
          gap={1.5}
        >
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            content={email}
          />
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
