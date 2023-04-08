import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Stack } from "@pankod/refine-mui";

const ITEM_HEIGHT = 48;

const ThreeDotsMenu = ({ option, open, anchorEl, handleClick, handleClose}) => {
  return (
    <Stack>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
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
        <MenuItem selected={option === "More Detail"} onClick={handleClose}>
          More Details
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default ThreeDotsMenu;
