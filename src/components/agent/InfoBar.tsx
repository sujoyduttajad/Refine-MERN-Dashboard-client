import { InfoBarProps } from "interfaces/agent";
import { Box, Stack, Typography } from "@pankod/refine-mui";

const InfoBar = ({ icon, content }: InfoBarProps) => {
  return (
    <Stack
      flex={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={1}
      flexWrap="wrap"
    >
      <Box alignItems="center">{icon}</Box>
      <Box>
        <Typography fontSize={13} color="#808191">
          {content.length > 25 ? `${content.substring(0, 20)}...` : content }
        </Typography>
      </Box>
    </Stack>
  );
};

export default InfoBar;
