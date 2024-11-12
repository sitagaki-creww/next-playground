"use client";

import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  Link,
  NativeSelect,
  Popover,
  Slide,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import RowDivider from "../RowDivider";
import ColumnDivider from "../ColumnDivider";

interface Data {
  id: number;
  name: string;
  country: string;
  email: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

function createData(
  id: number,
  name: string,
  email: string,
  country: string,
  submittedAt: string,
  createdAt: string,
  updatedAt: string
): Data {
  return {
    id,
    name,
    email,
    country,
    submittedAt,
    createdAt,
    updatedAt,
  };
}

const rows = [
  createData(
    1,
    "John",
    "example+1@example.com",
    "Japan",
    "2024-01-01T00:00:01",
    "2024-01-01T00:00:01",
    "2024-01-01T00:00:01"
  ),
  createData(
    2,
    "John",
    "example+2@example.com",
    "Japan",
    "2024-01-01T00:00:02",
    "2024-01-01T00:00:02",
    "2024-01-01T00:00:02"
  ),
  createData(
    3,
    "John",
    "example+3@example.com",
    "Japan",
    "2024-01-01T00:00:03",
    "2024-01-01T00:00:03",
    "2024-01-01T00:00:03"
  ),
  createData(
    4,
    "John",
    "example+4@example.com",
    "Japan",
    "2024-01-01T00:00:04",
    "2024-01-01T00:00:04",
    "2024-01-01T00:00:04"
  ),
  createData(
    5,
    "John",
    "example+5@example.com",
    "Japan",
    "2024-01-01T00:00:05",
    "2024-01-01T00:00:05",
    "2024-01-01T00:00:05"
  ),
  createData(
    6,
    "John",
    "example+6@example.com",
    "Japan",
    "2024-01-01T00:00:06",
    "2024-01-01T00:00:06",
    "2024-01-01T00:00:06"
  ),
  createData(
    7,
    "John",
    "example+7@example.com",
    "Japan",
    "2024-01-01T00:00:07",
    "2024-01-01T00:00:07",
    "2024-01-01T00:00:07"
  ),
  createData(
    8,
    "John",
    "example+8@example.com",
    "Japan",
    "2024-01-01T00:00:08",
    "2024-01-01T00:00:08",
    "2024-01-01T00:00:08"
  ),
  createData(
    9,
    "John",
    "example+9@example.com",
    "Japan",
    "2024-01-01T00:00:09",
    "2024-01-01T00:00:09",
    "2024-01-01T00:00:09"
  ),
  createData(
    10,
    "John",
    "example+10@example.com",
    "Taiwan",
    "2024-01-01T00:00:10",
    "2024-01-01T00:00:10",
    "2024-01-01T00:00:10"
  ),
  createData(
    11,
    "John",
    "example+11@example.com",
    "South Korea",
    "2024-01-01T00:00:11",
    "2024-01-01T00:00:11",
    "2024-01-01T00:00:11"
  ),
  createData(
    12,
    "John",
    "example+12@example.com",
    "USA",
    "2024-01-01T00:00:12",
    "2024-01-01T00:00:12",
    "2024-01-01T00:00:12"
  ),
  createData(
    13,
    "John",
    "example+13@example.com",
    "Japan",
    "2024-01-01T00:00:13",
    "2024-01-01T00:00:13",
    "2024-01-01T00:00:13"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "名前",
  },
  {
    id: "email",
    numeric: false,
    label: "Email",
  },
  {
    id: "country",
    numeric: false,
    label: "国",
  },
  {
    id: "submittedAt",
    numeric: false,
    label: "受付日時",
  },
  {
    id: "createdAt",
    numeric: false,
    label: "提出日時",
  },
  {
    id: "updatedAt",
    numeric: false,
    label: "更新日時",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  const [anchorElOfFilter, setAnchorElOfFilter] =
    React.useState<HTMLButtonElement | null>(null);
  const handleFilterOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElOfFilter(event.currentTarget);
  };
  const handleFilterClose = () => {
    setAnchorElOfFilter(null);
  };
  const isFilterOpened = Boolean(anchorElOfFilter);
  const filterId = isFilterOpened ? "filter-popover" : undefined;

  const [checked, setChecked] = React.useState([true, false]);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          応募一覧
        </Typography>
      )}
      <Tooltip title="Filter list">
        <IconButton onClick={handleFilterOpen} aria-describedby={filterId}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>

      <Popover
        id={filterId}
        open={isFilterOpened}
        anchorEl={anchorElOfFilter}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack sx={{ padding: 2 }} spacing={2}>
          <Typography variant="h6">絞り込み</Typography>
          <Stack direction={"row"} divider={<ColumnDivider />} spacing={1}>
            <Box>
              <FormControlLabel
                label="国"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="Japan"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label="Taiwan"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
                <FormControlLabel
                  label="South Korea"
                  control={
                    <Checkbox checked={checked[2]} onChange={handleChange3} />
                  }
                />
                <FormControlLabel
                  label="USA"
                  control={
                    <Checkbox checked={checked[3]} onChange={handleChange3} />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="適格性"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="適格"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label="不適格"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="業種"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="建設"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label="医療"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
                <FormControlLabel
                  label="航空"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="該当領域"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="建設"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label="医療"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
                <FormControlLabel
                  label="航空"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="サービスローンチの信頼性"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="あり"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label="なし"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="選考状態"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                {[
                  "1次選考中",
                  "1次選考通過",
                  "1次選考落選",
                  "2次選考中",
                  "2次選考通過",
                  "2次選考落選",
                  "最終選考中",
                  "最終選考通過",
                  "最終選考落選",
                ].map((label) => (
                  <FormControlLabel
                    key={label}
                    label={label}
                    control={
                      <Checkbox checked={checked[0]} onChange={handleChange2} />
                    }
                  />
                ))}
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Popover>
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("updatedAt");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // const visibleRows = React.useMemo(
  //   () =>
  //     [...rows]
  //       .sort(getComparator(order, orderBy))
  //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
  //   [order, orderBy, page, rowsPerPage]
  // );
  const visibleRows = React.useMemo(() => rows, []);

  const [selectedUserId, setSelectedUserId] = React.useState<
    string | undefined
  >();

  const handleTableRowClick = () => {
    setSelectedUserId("1");
  };

  const [isMemoExpanded, setIsMemoExpanded] = React.useState<boolean>(false);

  const [staffName, setStaffName] = React.useState("");
  const handleStaffNameChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setStaffName(event.target.value);
  };

  const [industry, setIndustry] = React.useState("");
  const handleIndustryChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setIndustry(event.target.value);
  };

  const [correspondingRegion, setCorrespondingRegion] = React.useState("");
  const handleCorrespondingRegionChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setCorrespondingRegion(event.target.value);
  };

  const [eligibility, setEligibility] = React.useState("");
  const handleEligibilityChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setEligibility(event.target.value);
  };

  const [reliabilityOfServiceLaunch, setReliabilityOfServiceLaunch] =
    React.useState("");
  const handleReliabilityOfServiceLaunchChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setReliabilityOfServiceLaunch(event.target.value);
  };

  const [selectionCondition, setSelectionCondition] = React.useState("");
  const handleSelectionConditionChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setSelectionCondition(event.target.value);
  };

  React.useEffect(() => {
    const abortController = new AbortController();

    window.document.addEventListener(
      "click",
      (e) => {
        console.log((e.target as HTMLElement).closest(".detailTarget"));
        if (
          e.target instanceof HTMLElement &&
          !e.target.closest(".detailTarget")
        ) {
          setSelectedUserId(undefined);
        }
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
            className={"detailTarget"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                    onClick={handleTableRowClick}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.submittedAt}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{row.updatedAt}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Slide
        direction="left"
        in={!!selectedUserId}
        mountOnEnter
        unmountOnExit
        className={"detailTarget"}
      >
        <Paper
          sx={{
            width: "50%",
            height: "100%",
            position: "fixed",
            right: 0,
            top: 0,
            padding: 3,
            overflow: "auto",
          }}
          elevation={2}
        >
          <Toolbar />
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Stack spacing={1.5}>
                <Typography variant="h6" fontWeight={"600"}>
                  プロフィール
                </Typography>
                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">名前</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">John</Typography>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">Email</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">example@example.com</Typography>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">国</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      日本（受付時）/ 台湾（提出時）/ 日本(更新時)
                    </Typography>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">ID</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      36b8f84d-df4e-4d49-b662-bcde71a8764f
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>

              <Stack spacing={1.5}>
                <Typography variant="h6" fontWeight={"600"}>
                  組織
                </Typography>
                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">名前</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">株式会社A</Typography>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">組織サイト</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Link
                      variant="body2"
                      href="https://example.com"
                      rel="noopener"
                      target="_blank"
                    >
                      https://example.com
                    </Link>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">サービスサイト</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Link
                      variant="body2"
                      href="https://example.com"
                      rel="noopener"
                      target="_blank"
                    >
                      https://example.com
                    </Link>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">ID</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      36b8f84d-df4e-4d49-b662-bcde71a8764f
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>

              <Stack spacing={1.5}>
                <Typography variant="h6" fontWeight={"600"}>
                  提案
                </Typography>
                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">ファイル</Typography>
                  </Grid>
                  <Grid size={9} container direction={"row"} gap={2}>
                    <Link
                      variant="body2"
                      href="https://example.com"
                      rel="noopener"
                      target="_blank"
                    >
                      提案1.pdf
                    </Link>
                    <Link
                      variant="body2"
                      href="https://example.com"
                      rel="noopener"
                      target="_blank"
                    >
                      提案2.pdf
                    </Link>
                    <Link
                      variant="body2"
                      href="https://example.com"
                      rel="noopener"
                      target="_blank"
                    >
                      提案3.pdf
                    </Link>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">メモ</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography
                      variant="body2"
                      onClick={() =>
                        setIsMemoExpanded((currentValue) => !currentValue)
                      }
                    >
                      メモです。メモです。メモです。メモです。メモです。メモです。メモです。メモです。メモです。メモです。
                      {isMemoExpanded ? null : "..."}
                      <Collapse
                        in={isMemoExpanded}
                        timeout="auto"
                        unmountOnExit
                      >
                        メモです。メモです。メモです。メモです。メモです。メモです。メモです。メモです。メモです。メモです。
                      </Collapse>
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>

              <Stack>
                <Typography variant="caption" component={"p"}>
                  受付日時: 2020/1/1 10:10:10
                </Typography>
                <Typography variant="caption" component={"p"}>
                  提出日時: 2020/1/1 10:10:10
                </Typography>
                <Typography variant="caption" component={"p"}>
                  更新日時: 2020/1/1 10:10:10
                </Typography>
              </Stack>
            </Stack>

            <Stack
              spacing={2}
              borderRadius={1}
              border={"solid"}
              borderColor={"#E0E0E0"}
              sx={{ padding: 2 }}
            >
              <Typography variant="h6" fontWeight={"600"}>
                運用メモ
              </Typography>

              <Stack divider={<RowDivider />} spacing={3}>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle1" fontWeight={"600"}>
                    担当者
                  </Typography>
                  <Grid
                    spacing={1}
                    direction={"row"}
                    container
                    justifyContent={"space-between"}
                  >
                    <Grid size={4}>
                      <Typography variant="body2">名前</Typography>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ minWidth: 120 }} size="small">
                        <NativeSelect
                          value={staffName}
                          onChange={handleStaffNameChange}
                          className={"detailTarget"}
                        >
                          <option value="">
                            <em>未設定</em>
                          </option>
                          <option value={10}>久留卯 一郎</option>
                          <option value={20}>久留卯 二郎</option>
                          <option value={30}>久留卯 三郎</option>
                        </NativeSelect>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Stack>

                <Stack spacing={1.5}>
                  <Typography variant="subtitle1" fontWeight={"600"}>
                    所感
                  </Typography>
                  <Grid
                    spacing={1}
                    direction={"row"}
                    container
                    justifyContent={"space-between"}
                  >
                    <Grid size={4}>
                      <Typography variant="body2">業種</Typography>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ minWidth: 120 }} size="small">
                        <NativeSelect
                          value={industry}
                          onChange={handleIndustryChange}
                          className={"detailTarget"}
                        >
                          <option value="">
                            <em>未設定</em>
                          </option>
                          <option value={10}>建設</option>
                          <option value={20}>医療</option>
                          <option value={30}>航空</option>
                        </NativeSelect>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid
                    spacing={1}
                    direction={"row"}
                    container
                    justifyContent={"space-between"}
                  >
                    <Grid size={4}>
                      <Typography variant="body2">該当領域</Typography>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ minWidth: 120 }} size="small">
                        <NativeSelect
                          value={correspondingRegion}
                          onChange={handleCorrespondingRegionChange}
                          className={"detailTarget"}
                        >
                          <option value="">
                            <em>未設定</em>
                          </option>
                          <option value={10}>建設</option>
                          <option value={20}>医療</option>
                          <option value={30}>航空</option>
                        </NativeSelect>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid
                    spacing={1}
                    direction={"row"}
                    container
                    justifyContent={"space-between"}
                  >
                    <Grid size={4}>
                      <Typography variant="body2">適格性</Typography>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ minWidth: 120 }} size="small">
                        <NativeSelect
                          value={eligibility}
                          onChange={handleEligibilityChange}
                          className={"detailTarget"}
                        >
                          <option value="">
                            <em>未設定</em>
                          </option>
                          <option value={10}>適格</option>
                          <option value={20}>不適格</option>
                        </NativeSelect>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid
                    spacing={1}
                    direction={"row"}
                    container
                    justifyContent={"space-between"}
                  >
                    <Grid size={4}>
                      <Typography variant="body2">
                        サービスローンチの信頼性
                      </Typography>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ minWidth: 120 }} size="small">
                        <NativeSelect
                          value={reliabilityOfServiceLaunch}
                          onChange={handleReliabilityOfServiceLaunchChange}
                          className={"detailTarget"}
                        >
                          <option value="">
                            <em>未設定</em>
                          </option>
                          <option value={10}>あり</option>
                          <option value={20}>なし</option>
                        </NativeSelect>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Stack>

                <Stack spacing={1.5}>
                  <Typography variant="subtitle1" fontWeight={"600"}>
                    選考
                  </Typography>
                  <Grid
                    spacing={1}
                    direction={"row"}
                    container
                    justifyContent={"space-between"}
                  >
                    <Grid size={4}>
                      <Typography variant="body2">状態</Typography>
                    </Grid>
                    <Grid>
                      <FormControl sx={{ minWidth: 120 }} size="small">
                        <NativeSelect
                          value={selectionCondition}
                          onChange={handleSelectionConditionChange}
                        >
                          <option value="">
                            <em>未設定</em>
                          </option>
                          <option value={10}>1次選考中</option>
                          <option value={11}>1次選考通過</option>
                          <option value={12}>1次選考落選</option>
                          <option value={20}>2次選考中</option>
                          <option value={21}>2次選考通過</option>
                          <option value={22}>2次選考落選</option>
                          <option value={30}>最終選考中</option>
                          <option value={31}>最終選考通過</option>
                          <option value={32}>最終選考落選</option>
                        </NativeSelect>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Slide>
    </Box>
  );
}
