import { Box, Typography } from "@pankod/refine-mui";
import React from "react";

export function Loading() {
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
        backgroundColor: "#E7E9FC",
      }}
    >
      <Typography variant="h3" fontSize={25} fontWeight={700} color="#11142d">
        Loading...
      </Typography>
    </Box>
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
