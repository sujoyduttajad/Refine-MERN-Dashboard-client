import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import {
  Container,
  Box,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@pankod/refine-mui";
import { CredentialResponse } from "../interfaces/google";
import { evoiaLight, BrandIcon, pointyBuilding, skyscrapper } from "assets";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          // put your own client_id
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="row"
      maxWidth="100vw"
      width="100%"
      maxHeight="100vh"
      height="80%"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box maxWidth="50%">
        <CardMedia
          component="img"
          image={pointyBuilding}
          alt="vertical image of skyscrapper"
          width="100%"
          sx={{
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        maxWidth="50%"
        width="100%"
        // height="100%"
        py="7rem"
        display="flex"
        flexDirection="column"
      >
        <Stack
          direction="column"
          height="100%"
          justifyContent="space-between"
          alignItems="center"
          gap={3}
        >
          <Box py="20%" gap={2} height="5rem">
            <CardMedia
              component="img"
              image={BrandIcon}
              alt="Evoia Logo"
              width="70%"
            />
            <Typography fontSize={18} mt={2}>
              Evoia - Your one stop Property manager
            </Typography>
          </Box>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "0",
              // width: { xs: "70vw", lg: "100%" },
              width: "fit-content",
              backgroundColor: "#FCFCFC",
              border: 0,
            }}
          >
            {/* <CardContent> */}
            <Typography fontSize={32} fontWeight={700}>
              Welcome Back
            </Typography>
            <Typography fontSize={14}>
              Please sign-in with your Google account.
            </Typography>
            {/* </CardContent> */}

            <Box mt={4}>
              <GoogleButton />
            </Box>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};
