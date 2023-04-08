import React from "react";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@pankod/refine-mui";
import { PropertyListValues } from "interfaces/property";
import { formatter } from "utils/functions";

const ITEM_HEIGHT = 48;
const option = "More Detail";

const SalesCard = ({
  creator,
  title,
  photo,
  price,
  location,
}: PropertyListValues) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const priceDisplay = formatter.format(price).slice(0, -3);
  return (
    <Box display="flex" justifyContent="space-between">
      <Stack direction="row" justifyContent="flex-start" gap={2}>
        <CardMedia
          component="img"
          image={photo}
          alt={title}
          sx={{
            height: "4.5rem",
            width: "4.5rem",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
        <Stack direction="column" gap={1}>
          <Typography fontSize={18} fontWeight={600} color="#11142d">
            {title}
          </Typography>
          <Box
            px={1.5}
            py={0.5}
            width="fit-content"
            borderRadius={1}
            bgcolor="#dadefa"
          >
            <Typography fontSize={16} fontWeight={700} color="#475be8">
              {priceDisplay}
            </Typography>
          </Box>
        </Stack>
      </Stack>
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
    </Box>
  );
};

export default SalesCard;
