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
      {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
    </Stack>
  );
};

export default Toasts;
