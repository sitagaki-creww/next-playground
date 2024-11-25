"use client";

import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import {
  Avatar,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  Tooltip,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useParams, usePathname, useRouter } from "next/navigation";
import * as React from "react";
import RowDivider from "../_components/molecules/RowDivider";
import ColumnDivider from "../_components/molecules/ColumnDivider";

const drawerWidth = 240;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const programIds = ["program-batch-1", "program-batch-2"] as const;
  const programIdMap = {
    "program-batch-1": "Program Batch 1",
    "program-batch-2": "Program Batch 2",
  };
  const { programId } = { programId: "program-batch-1" };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProgramChange = (value: string) => {
    router.push(`/management/${programId}${value}/dashboard`);
  };

  return (
    <AppRouterCacheProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          color="default"
        >
          <Toolbar>
            <Stack
              direction="row"
              divider={<ColumnDivider />}
              spacing={2}
              flexShrink={0}
            >
              <Typography variant="h6" noWrap component="div" flexShrink={0}>
                Management
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Program</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={programId}
                  label="Program"
                  onChange={(e) => handleProgramChange(e.target.value)}
                  size="small"
                >
                  {programIds.map((programId) => (
                    <MenuItem key={programId} value={programId}>
                      {programIdMap[programId]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar src="/broken-image.jpg" alt="Norman reedus" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {["Logout"].map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected={pathname === `/management/${programId}/dashboard`}
                  onClick={() =>
                    router.push(`/management/${programId}/dashboard`)
                  }
                >
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  selected={
                    pathname === `/management/${programId}/applications`
                  }
                  onClick={() =>
                    router.push(`/management/${programId}/applications`)
                  }
                >
                  <ListItemIcon>
                    <TableChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Applications" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </AppRouterCacheProvider>
  );
}
