import { Box, Stack, Typography } from '@pankod/refine-mui'

const CustomerCard = () => {
  return (
    <Box display="flex" justifyContent="space-evenly" gap={1}>
        <Stack direction="column">
            <Typography fontSize={14} color="#808191">Total Customers</Typography>
            <Typography variant='h4'>500K</Typography>
            <Typography fontSize={12} color="#18C346">21.77%</Typography>
        </Stack>
        <Stack></Stack>
    </Box>
  )
}

export default CustomerCard