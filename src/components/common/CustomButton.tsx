import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  paddingValue,
  fontSizeValue,
  fontWeightValue,
  handleClick,
}: CustomButtonProps) => {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: `${paddingValue ? paddingValue : "10px 15px"}`,
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: `${fontSizeValue ? fontSizeValue : 16}`,
        fontWeight: `${fontWeightValue ? fontWeightValue : 600}`,
        gap: "10px",
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
      }}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
