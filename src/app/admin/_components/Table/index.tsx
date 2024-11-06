"use client";

import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Link } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface Data {
  id: number;
  country: string;
  createdAt: string;
  attachedFileURL: string;
  email: string;
  updatedAt: string;
}

function createData(
  id: number,
  email: string,
  country: string,
  attachedFileURL: string,
  createdAt: string,
  updatedAt: string
): Data {
  return {
    id,
    email,
    country,
    attachedFileURL,
    createdAt,
    updatedAt,
  };
}

const rows = [
  createData(
    1,
    "example+1@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:01",
    "2024-01-01T00:00:01"
  ),
  createData(
    2,
    "example+2@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:02",
    "2024-01-01T00:00:02"
  ),
  createData(
    3,
    "example+3@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:03",
    "2024-01-01T00:00:03"
  ),
  createData(
    4,
    "example+4@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:04",
    "2024-01-01T00:00:04"
  ),
  createData(
    5,
    "example+5@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:05",
    "2024-01-01T00:00:05"
  ),
  createData(
    6,
    "example+6@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:06",
    "2024-01-01T00:00:06"
  ),
  createData(
    7,
    "example+7@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:07",
    "2024-01-01T00:00:07"
  ),
  createData(
    8,
    "example+8@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:08",
    "2024-01-01T00:00:08"
  ),
  createData(
    9,
    "example+9@example.com",
    "Japan",
    "https://example.com",
    "2024-01-01T00:00:09",
    "2024-01-01T00:00:09"
  ),
  createData(
    10,
    "example+10@example.com",
    "Taiwan",
    "https://example.com",
    "2024-01-01T00:00:10",
    "2024-01-01T00:00:10"
  ),
  createData(
    11,
    "example+11@example.com",
    "South Korea",
    "https://example.com",
    "2024-01-01T00:00:11",
    "2024-01-01T00:00:11"
  ),
  createData(
    12,
    "example+12@example.com",
    "USA",
    "https://example.com",
    "2024-01-01T00:00:12",
    "2024-01-01T00:00:12"
  ),
  createData(
    13,
    "example+13@example.com",
    "Japan",
    "https://example.com",
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
    id: "attachedFileURL",
    numeric: false,
    label: "添付ファイル",
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
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
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
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("updatedAt");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
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

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
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
                  >
                    <TableCell component="th" id={labelId} scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>
                      <Link
                        href={row.attachedFileURL}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: 14,
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AttachFileIcon sx={{ fontSize: "inherit" }} />
                        <Typography
                          sx={{ fontSize: "inherit" }}
                          component="span"
                        >
                          添付ファイル
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{row.updatedAt}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
