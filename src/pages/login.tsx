import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box, CardMedia } from "@pankod/refine-mui";
import { CredentialResponse } from "../interfaces/google";
import { evoiaLight, pointyBuilding, skyscrapper } from "assets";

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
      sx={{
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box maxWidth="50%">
        <CardMedia
           component="img"
           image={skyscrapper}
           alt="vertical image of skyscrapper"
           width="100%"
           sx={{
            //  height: "7rem",
            //  width: "7rem",
            maxHeight: "100vh",
             objectFit: "cover",
           }}
        />
      </Box>
      <Box maxWidth="50%">

      
      <Container
        component="div"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={evoiaLight} alt="Evoia Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
      </Box>
    </Box>
  );
};
