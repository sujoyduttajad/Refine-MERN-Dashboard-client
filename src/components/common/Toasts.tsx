import { Alert, AlertTitle, Stack } from "@pankod/refine-mui";

interface ToastsProps {
  message: string;
}

const Toasts = ({ message }: ToastsProps) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    </Stack>
  );
};

export default Toasts;
