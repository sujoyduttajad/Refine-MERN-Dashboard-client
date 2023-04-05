import { AgentCardProp } from "interfaces/agent";
import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";


const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {

  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if(currentUser.email === email) return '/my-profile'

    return `/agent/show/${id}`
  }

  return (
    <Box
      component={Link}
      to={generateLink()}
    >
      AgentCard
    </Box>
  );
};

export default AgentCard;
