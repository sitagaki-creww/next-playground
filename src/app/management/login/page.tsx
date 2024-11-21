import { Box, Button, Stack, TextField } from "@mui/material";

export default function LoginPage() {
  return (
    <Box justifyContent={"center"} display={"flex"} sx={{ p: 4 }}>
      <Stack spacing={1} sx={{ width: "min(400px, 100%)" }}>
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
      </Stack>
    </Box>
  );
}
