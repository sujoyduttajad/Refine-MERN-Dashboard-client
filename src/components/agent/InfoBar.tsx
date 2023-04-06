import { InfoBarProps } from 'interfaces/agent'
import { Box, Stack, Typography } from "@pankod/refine-mui";

const InfoBar = ({ icon, name}: InfoBarProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" gap={5}>
        <Box>{icon}</Box>
        <Typography>{name}</Typography>
    </Stack>
  )
}

export default InfoBar