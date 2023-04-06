import { InfoBarProps } from 'interfaces/agent'
import { Box, Stack, Typography } from "@pankod/refine-mui";

const InfoBar = ({ icon, name}: InfoBarProps) => {
  return (
    <Stack>
        {icon}
        <Typography>{name}</Typography>
    </Stack>
  )
}

export default InfoBar