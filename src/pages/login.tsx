import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import {
  Container,
  Box,
  CardMedia,
  Card,
  CardContent,
  Typography,
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
      justifyContent="space-between"
      sx={{
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box maxWidth="50vw">
        <CardMedia
          component="img"
          image={pointyBuilding}
          alt="vertical image of skyscrapper"
          width="100%"
          sx={{
            maxHeight: "100vh",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        maxWidth="50vw"
        width="100%"
        padding="7rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%" padding="7rem">
          <CardMedia
            component="img"
            image={BrandIcon}
            alt="Evoia Logo"
            width="70%"
          />
        </Box>
        <Card
        variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "5rem 3rem",
            width: { xs: "70vw", lg: "100%" },
            border: 0
          }}
        >
          <CardContent>
            <Typography variant="h3" fontWeight={700}>Welcome Back</Typography>
            <Typography variant="body1">
              Please sign-in with your Google account.
            </Typography>
          </CardContent>

          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
