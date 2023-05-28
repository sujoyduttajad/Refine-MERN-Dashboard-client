import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Edit, IconButton, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, PropertyProps } from "interfaces/common";
import PropertyCard from "./PropertyCard";
import CustomButton from "./CustomButton";
import { AgentCover, fbIcon, instaIcon, twitterIcon } from "assets";
import AgentBio from "./AgentBio";
import AgentDetails from "components/agent/AgentDetails";

const AgentProfile = ({
  id,
  type,
  name,
  avatar,
  email,
  properties,
}: ProfileProps) => {
  const noOfProperties = properties ? properties.length : 0;
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" my={4}>
        <Typography fontSize={25} fontWeight={700} color="#11142D">
          {type} Profile
        </Typography>
      </Stack>
      <Box
        mt="20px"
        borderRadius="15px"
        padding="20px"
        bgcolor="transparent"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap={{ md: "wrap", lg: "nowrap" }}
      >
        <Box
          bgcolor="#FCFCFC"
          margin={{ xs: 1, sm: 2 }}
          height="100%"
          borderRadius={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            maxWidth: 350,
            "&:hover": {
              boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.5)",
            },
          }}
        >
          <img
            src={AgentCover}
            height={140}
            alt="abstract"
            className="agent_profile-bg"
          />

          <Box
            display="flex"
            flexDirection="column"
            margin={2}
            position="relative"
          >
            <img
              src={
                // checkImage(avatar)
                avatar
                  ? avatar
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
              width={110}
              height={110}
              alt="agent_profile"
              className="agent_profile_user-img"
            />
            <Box display="flex" flexDirection="column" gap="30px">
              <Box display="flex" justifyContent="flex-end">
                <Stack direction="column">
                  <Typography
                    textTransform="capitalize"
                    fontSize={20}
                    marginTop={2}
                    fontWeight={700}
                    color="#475be8"
                  >
                    {name}
                  </Typography>
                  <Typography fontSize={14} color="#808191">
                    {email === "sujoyduttajad@gmail.com"
                      ? "Admin"
                      : "Real-Estate Agent"}
                  </Typography>
                </Stack>
              </Box>

              <Stack direction="column" gap="30px">
                <AgentBio id={id} email={email} />
              </Stack>

              <Stack direction="row" justifyContent="center" gap="30px" my={3}>
                <IconButton>
                  <img src={fbIcon} alt="" />
                </IconButton>
                <IconButton>
                  <img src={twitterIcon} alt="" />
                </IconButton>
                <IconButton>
                  <img src={instaIcon} alt="" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>

        <AgentDetails agentProperties={noOfProperties} />
      </Box>

      {properties.length > 0 ? (
        <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
          <Typography fontSize={20} fontWeight={700} color="#11142D">
            Active Listings({properties?.length})
          </Typography>

          <Box
            mt={2.5}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2.5,
            }}
          >
            {properties?.map((property: PropertyProps) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                title={property.title}
                location={property.location}
                price={property.price}
                photo={property.photo}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Stack direction="column" padding={5} justifyContent="center">
          <Typography variant="h5" color="#d5d5d5">
            There are no properties to show
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default AgentProfile;
