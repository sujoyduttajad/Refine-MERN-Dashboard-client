import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Edit, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, PropertyProps } from "interfaces/common";
import PropertyCard from "./PropertyCard";
import CustomButton from "./CustomButton";
import { AgentCover } from "assets";

const AgentProfile = ({
  type,
  name,
  avatar,
  email,
  properties,
}: ProfileProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        {type} Profile
      </Typography>

      <Box
        mt="20px"
        borderRadius="15px"
        padding="20px"
        bgcolor="transparent"
        maxWidth="80rem"
      >
        <Box
          bgcolor="#FCFCFC"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            maxWidth: 350,
          }}
        >
          <img
            src={AgentCover}
            width={340}
            height={140}
            alt="abstract"
            className="agent_profile-bg"
          />
          <Box
            flex={1}
            alignItems="flex-start"
            margin={2}
            marginTop={0}
          >
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              margin={0}
              height="fit-content"
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
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                
                justifyContent="space-between"
                gap="30px"
              >
                <Box display="flex" justifyContent="flex-end">
                  <Stack direction="column" px={2}>
                    <Typography
                      textTransform="capitalize"
                      fontSize={20}
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
                  <Stack gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">
                      Address
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="10px"
                      padding={1.5}
                      sx={{ border: "1px solid #E4E4E4", borderRadius: "6px" }}
                    >
                      <Place sx={{ color: "#11142D" }} />
                      <Typography fontSize={14} color="#11142D">
                        17 Stuyvesant Walk New York, New York(NY), 10009
                      </Typography>
                    </Box>
                  </Stack>
                  
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {properties.length > 0 && (
        <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
          <Typography fontSize={18} fontWeight={600} color="#11142D">
            {type} Properties
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
      )}
    </Box>
  );
};

export default AgentProfile;
