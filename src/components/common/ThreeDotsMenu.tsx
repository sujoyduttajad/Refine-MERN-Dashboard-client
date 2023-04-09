import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Stack } from "@pankod/refine-mui";
import { ThreeDotsProps } from "interfaces/common";

const ITEM_HEIGHT = 48;

const ThreeDotsMenu = ({
  option,
  value,
  open,
  menuId,
  anchorEl,
  handleClick,
  handleClose,
  handleNavigate
}: ThreeDotsProps) => {
  return (
    <Stack>
      <IconButton
        aria-label="more"
        id={menuId}
        aria-controls={open ? menuId : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id={menuId}
        MenuListProps={{
          "aria-labelledby": menuId,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          selected={option === value}
          onClick={handleNavigate}
        >
          {value}
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default ThreeDotsMenu;
