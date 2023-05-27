import React from "react";
import { Box, CardMedia, Stack, Typography } from "@pankod/refine-mui";
import { PropertyListValues } from "interfaces/property";
import { formatter } from "utils/functions";
import ThreeDotsMenu from "components/common/ThreeDotsMenu";

const SalesCard = ({ title, photo, price }: PropertyListValues) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = () => {};

  const priceDisplay = formatter.format(price).slice(0, -3);

  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <CardMedia
          component="img"
          image={photo}
          alt={title}
          sx={{
            height: "5rem",
            width: "5rem",
            borderRadius: "5px",
            objectFit: "contain",
          }}
        />
        <Stack direction="column" gap={1} justifyContent="space-evenly">
          <Typography fontSize={16} fontWeight={600} color="#11142d">
            {title}
          </Typography>
          <Box
            px={1.5}
            py={0.5}
            mb={1}
            width="fit-content"
            borderRadius={1}
            bgcolor="#dadefa"
          >
            <Typography fontSize={15} fontWeight={700} color="#475be8">
              {priceDisplay}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <ThreeDotsMenu
        option="More Detail"
        open={open}
        value="More Detail"
        menuId="sale-button"
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        handleNavigate={handleNavigate}
      />
    </Box>
  );
};

export default SalesCard;
