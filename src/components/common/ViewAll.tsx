import { Button } from "@pankod/refine-mui";
import React from "react";

const ViewAll = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      type="button"
      sx={{
        textTransform: "capitalize",
        color: "#808191",
        borderColor: "#E4E4E4",
        "&:hover": {
            borderColor: "#333",
        }
      }}
    >
      View All
    </Button>
  );
};

export default ViewAll;
