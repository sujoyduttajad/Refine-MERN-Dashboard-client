import {
  Backdrop,
  Box,
  CircularProgress,
  Typography,
} from "@pankod/refine-mui";

export function Loading() {
  return (
    <Backdrop open={true} style={{ zIndex: 999 }}>
      <CircularProgress sx={{ color: "#fff" }} size={60} thickness={3} />
      <Typography variant="h6" mt={2} sx={{ color: "#fff" }}>
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
