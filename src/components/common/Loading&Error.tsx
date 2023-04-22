import {
  Backdrop,
  Box,
  CircularProgress,
  Typography,
} from "@pankod/refine-mui";


export function Loading() {


  return (
    <Backdrop
      component="main"
      open={true}
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: '$fade 0.3s ease-in-out',
        '@keyframes fade': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },

        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
      }}
    >
      <CircularProgress sx={{ color: "#fff" }} size={60} thickness={3} />
      <Typography variant="h6" mt={2} ml={4} sx={{ color: "#fff" }}>
        Loading...
      </Typography>
    </Backdrop>
  );
}

export function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 3,
        padding: "3rem",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#FCE4E7",
      }}
    >
      <Typography variant="h3" fontSize={25} fontWeight={700} color="#E84558">
        Oops we have an Error
      </Typography>
    </Box>
  );
}
