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
      maxWidth="100vw"
      sx={{
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box maxWidth="50vw">
        <CardMedia
          component="img"
          image={skyscrapper}
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
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          width="100%"
          padding="17rem"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={evoiaLight}
            alt="Evoia Logo"
            // width="10rem"
            // height="6rem"
          />
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
