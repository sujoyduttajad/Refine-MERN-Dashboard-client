import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  disabled,
  heightValue,
  widthValue,
  paddingValue,
  fontSizeValue,
  fontWeightValue,
  handleClick,
}: CustomButtonProps) => {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
      disabled={disabled}
      sx={{
        flex: fullWidth ? 1 : "unset",
        color,
        gap: "10px",
        minWidth: 130,
        textTransform: "capitalize",
        height: `${heightValue ? heightValue : "fit-content"}`,
        fontSize: `${fontSizeValue ? fontSizeValue : 16}`,
        fontWeight: `${fontWeightValue ? fontWeightValue : 600}`,
        backgroundColor: `${disabled ? "#eee" : backgroundColor}`,
        cursor: `${disabled ? "not-allowed" : "pointer"}`,
        padding: `${paddingValue ? paddingValue : "10px 15px"}`,
        width: widthValue ? "100%" : "fit-content",
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
