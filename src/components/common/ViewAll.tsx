import { Button } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";
import { ViewAllProps } from "interfaces/home";

const ViewAll = ({ pathName} : ViewAllProps) => {
  return (
    <Link to={pathName}>
      <Button
        variant="outlined"
        size="small"
        type="button"
        sx={{
          textTransform: "capitalize",
          color: "#808191",
          borderColor: "#E4E4E4",
          "&:hover": {
            borderColor: "#475BE8",
            color: "#475BE8",
            backgroundColor: "#F2F3FD",
          },
        }}
      >
        View All
      </Button>
    </Link>
  );
};

export default ViewAll;
