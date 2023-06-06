import {
  Card,
  Stack,
  CardMedia,
  CardContent,
  Typography,
} from "@pankod/refine-mui";
import { ChatOutlined, Phone, Place } from "@mui/icons-material";
import { CustomButton } from "components";
import { AgentInfoProps } from "interfaces/agent";
import { Link } from "@pankod/refine-react-router-v6";

const AgentInfoCard = ({
  image,
  email,
  name,
  userEmail,
  creatorId,
  noOfProperties,
}: AgentInfoProps) => {
  const handlePathName = () => {
    if (userEmail === email) {
      return "/my-profile";
    } else {
      return `/agents/show/${creatorId}`;
    }
  };
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
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
          image={image}
          alt="Agent Profile picture"
          sx={{ height: "7rem", width: "7rem", borderRadius: "50%" }}
        />
        {/* Agent Bio */}
        <Stack mt={2} direction="row">
          <Typography fontSize={16} fontWeight={600} color="#808191">
            Creator:{" "}
          </Typography>
          <Link to={handlePathName()}>
            <Typography
              pl={1}
              fontSize={16}
              fontWeight={600}
              textTransform="capitalize"
              sx={{ color: "#475be8", textDecoration: "underline" }}
            >
              {name}
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row">
          <Typography fontSize={16} fontWeight={600} color="#808191">
            Designation:{" "}
          </Typography>
          <Typography pl={1} fontSize={16} fontWeight={600}>
            {email === "sujoyduttajad@gmail.com" ? "Admin" : "Agent"}
          </Typography>
        </Stack>
        <Stack mb={2} direction="row">
          <Typography fontSize={16} fontWeight={600} color="#808191">
            Total Properties:{" "}
          </Typography>
          <Typography pl={1} fontSize={16} fontWeight={600}>
            {noOfProperties}
          </Typography>
        </Stack>
        {/* Location */}
        <Stack direction="row" mt={0.5} alignItems="center" gap={0.5}>
          <Place sx={{ color: "#808191" }} />
          <Typography fontSize={14} color="#808191">
            New York, USA
          </Typography>
        </Stack>
        <Typography mt={2} fontSize={16} fontWeight={600}>
          {email}
        </Typography>

        <Stack direction="row" mt={3} alignItems="center" gap={2}>
          <CustomButton
            type="button"
            title="Message"
            backgroundColor="#475be8"
            color="#fcfcfc"
            heightValue="40px"
            paddingValue="1px 10px"
            fontSizeValue="16.5px"
            icon={<ChatOutlined />}
          />
          <CustomButton
            type="button"
            title="Call"
            backgroundColor="#2ED480"
            color="#fcfcfc"
            heightValue="40px"
            paddingValue="1px 10px"
            fontSizeValue="16.5px"
            icon={<Phone />}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AgentInfoCard;
