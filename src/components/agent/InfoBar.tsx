import { InfoBarProps } from "interfaces/agent";
import { Box, Stack, Typography } from "@pankod/refine-mui";

const InfoBar = ({ icon, content }: InfoBarProps) => {
  return (
    <Stack
      flex={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={1}
    >
      <Box>{icon}</Box>
      <Typography fontSize={15} color="#808191">
        {content}
      </Typography>
    </Stack>
  );
};

export default InfoBar;
