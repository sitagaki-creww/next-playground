import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Table from "./_components/Table";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: 32 }}>
        <PersonIcon sx={{ fontSize: "inherit" }} />
        <Typography component="h2" sx={{ fontSize: "inherit" }}>
          Admins
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField label="search" variant="standard" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: "1" }} />
        <Button variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
      </Box>
      <Table />
    </Box>
  );
}
