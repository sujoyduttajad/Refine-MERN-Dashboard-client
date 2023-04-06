import { InfoBarProps } from "interfaces/agent";
import { Box, Stack, Typography } from "@pankod/refine-mui";

const InfoBar = ({ icon, content }: InfoBarProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" gap={5} mr="8%">
      <Box>{icon}</Box>
      <Typography fontSize={14} color="#808191">
        {content}
      </Typography>
    </Stack>
  );
};

export default InfoBar;
