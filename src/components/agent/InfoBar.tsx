import { InfoBarProps } from "interfaces/agent";
import { Box, Stack, Typography } from "@pankod/refine-mui";

const InfoBar = ({ icon, content }: InfoBarProps) => {
  return (
    <Stack
      flex={1}
      direction="row"
      justifyContent="flex-start"
      minWidth={{ xs: '100%', sm: 300 }}
      gap={3}
    >
      <Box>{icon}</Box> 
      <Typography fontSize={14} color="#808191">
        {content}
      </Typography>
    </Stack>
  );
};

export default InfoBar;
