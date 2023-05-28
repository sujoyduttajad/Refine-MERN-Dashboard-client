import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Edit, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, PropertyProps } from "interfaces/common";
import PropertyCard from "./PropertyCard";
import CustomButton from "./CustomButton";

export function checkImage(url: any) {
  let img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, name, avatar, email, properties }: ProfileProps) => (
  <Box>
    <Typography fontSize={25} fontWeight={700} color="#11142D">
      {type} Profile
    </Typography>

    <Box
      mt="20px"
      borderRadius="15px"
      padding="20px"
      bgcolor="#FCFCFC"
      maxWidth="80rem"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2.5,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          width={340}
          height={320}
          alt="abstract"
          className="my_profile-bg"
        />
        <Box
          flex={1}
          sx={{
            marginTop: { md: "8px" },
            marginLeft: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <img
              src={
                // checkImage(avatar)
                avatar
                  ? avatar
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
              width={120}
              height={120}
              alt="user_profile"
              className="my_profile_user-img"
            />

            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              gap="30px"
            >
              <Box
                // flex={1}
                display="flex"
                justifyContent="space-between"
                gap="30px"
              >
                <Stack direction="column">
                  <Typography
                    textTransform="capitalize"
                    fontSize={22}
                    fontWeight={700}
                    color="#475be8"
                  >
                    {name}
                  </Typography>
                  <Typography fontSize={16} color="#808191">
                    {email === "sujoyduttajad@gmail.com"
                      ? "Admin"
                      : "Real-Estate Agent"}
                  </Typography>
                </Stack>
                {/* <CustomButton
                  type="button"
                  title="Edit"
                  backgroundColor="#475be8"
                  color="#fcfcfc"
                  heightValue="40px"
                  paddingValue="1px 10px"
                  fontSizeValue="16.5px"
                  icon={<Edit />}
                  // handleClick={handleEditProperty}
                /> */}
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

                <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                  <Stack flex={1} gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">
                      Phone Number
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="10px"
                      padding={1.5}
                      sx={{ border: "1px solid #E4E4E4", borderRadius: "6px" }}
                    >
                      <Phone sx={{ color: "#11142D" }} />
                      <Typography fontSize={14} color="#11142D" noWrap>
                        (212) 254-7323
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack flex={1} gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">
                      Email
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="10px"
                      padding={1.5}
                      sx={{ border: "1px solid #E4E4E4", borderRadius: "6px" }}
                    >
                      <Email sx={{ color: "#11142D" }} />
                      <Typography fontSize={14} color="#11142D">
                        {email}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {properties.length > 0 && (
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
        <Typography fontSize={20} fontWeight={700} color="#11142D">
          {type} Properties ({properties?.length})
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

export default Profile;
