import {
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@pankod/refine-mui";
import { ChatOutlined, Phone, Place } from "@mui/icons-material";
import { CustomButton } from "components";
import sampleAgent from "../../assets/sample-agent.jpg";
const AgentCard = () => {
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
        borderRadius: "",
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
          image={sampleAgent}
          alt="Agent Profile picture"
          sx={{ height: "7rem", width: "7rem", borderRadius: "50%" }}
        />
        <Typography mt={2} fontSize={16} fontWeight={600}>
          Cassandra Wilson
        </Typography>
        <Typography fontSize={14} fontWeight={400} color="#808191">
          Agent
        </Typography>
        <Stack direction="row" mt={0.5} alignItems="center" gap={0.5}>
          <Place sx={{ color: "#808191" }} />
          <Typography fontSize={14} color="#808191">
            New York, USA
          </Typography>
        </Stack>
        <Typography mt={2} fontSize={16} fontWeight={600}>
          10 Properties
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

export default AgentCard;
