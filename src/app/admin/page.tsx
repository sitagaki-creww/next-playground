import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Table from "./_components/Table";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import HorizontalBars from "./_components/HorizontalBars";
import CustomLineChart from "./_components/CustomLineChart";

export default function Home() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: 32 }}>
        <EmailIcon sx={{ fontSize: "inherit" }} />
        <Typography component="h2" sx={{ fontSize: "inherit" }}>
          Pre-application
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Paper sx={{ p: 2, flexBasis: "400px" }}>
          <Typography variant="h5" component="h3">
            応募
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 1 }}
          >
            <Typography variant="caption" component="p">
              今日
            </Typography>
            <Typography variant="body1" component="em">
              100
            </Typography>
            <Typography variant="caption" component="p">
              昨日
            </Typography>
            <Typography variant="body1" component="em">
              100
            </Typography>
            <Typography variant="caption" component="p">
              総数
            </Typography>
            <Typography variant="body1" component="em">
              200
            </Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 2, flexBasis: "400px" }}>
          <Typography variant="h5" component="h3">
            国
          </Typography>

          <HorizontalBars />
        </Paper>

        <Paper sx={{ p: 2, flexGrow: 1 }}>
          <Typography variant="h5" component="h3">
            推移
          </Typography>

          <CustomLineChart />
        </Paper>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Table />
      </Box>
    </Box>
  );
}
