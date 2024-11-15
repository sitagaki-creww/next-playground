"use client";

import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  Link,
  MenuItem,
  NativeSelect,
  Popover,
  Select,
  SelectChangeEvent,
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
import { useModel } from "./model";

interface Data {
  id: number;
  name: string;
  country: string;
  email: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

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
  // onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

  const [checkedCountry, setCheckedCountry] = React.useState([
    true,
    true,
    true,
    true,
  ]);
  const [checkedEligibility, setCheckedEligibility] = React.useState([
    false,
    false,
  ]);
  const [checkedIndustry, setCheckedIndustry] = React.useState([
    false,
    false,
    false,
  ]);
  const [checkedCorrespondingRegion, setCheckedCorrespondingRegion] =
    React.useState([false, false, false]);
  const [checkedReliability, setCheckedReliability] = React.useState([
    false,
    false,
  ]);
  const [checkedSelectionCondition, setCheckedSelectionCondition] =
    React.useState([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  const handleCheckboxChange = (
    checked: boolean,
    targetIndex: number,
    setter: React.Dispatch<React.SetStateAction<boolean[]>>
  ) => {
    const isAll = targetIndex === -1;
    if (isAll) {
      setter((prev) => {
        return prev.map((checked) => !checked);
      });
    } else {
      setter((prev) => {
        const newChecked = [...prev];
        newChecked[targetIndex] = checked;

        return newChecked;
      });
    }
  };

  const hasDifferentValue = (arr: boolean[]) => {
    return arr.some((value) => value !== arr[0]);
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
                    checked={
                      checkedCountry[0] &&
                      checkedCountry[1] &&
                      checkedCountry[2] &&
                      checkedCountry[3]
                    }
                    indeterminate={hasDifferentValue(checkedCountry)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e.target.checked,
                        -1,
                        setCheckedCountry
                      )
                    }
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="Japan"
                  control={
                    <Checkbox
                      checked={checkedCountry[0]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          0,
                          setCheckedCountry
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="Taiwan"
                  control={
                    <Checkbox
                      checked={checkedCountry[1]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          1,
                          setCheckedCountry
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="South Korea"
                  control={
                    <Checkbox
                      checked={checkedCountry[2]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          2,
                          setCheckedCountry
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="USA"
                  control={
                    <Checkbox
                      checked={checkedCountry[3]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          3,
                          setCheckedCountry
                        )
                      }
                    />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="適格性"
                control={
                  <Checkbox
                    checked={checkedEligibility[0] && checkedEligibility[1]}
                    indeterminate={hasDifferentValue(checkedEligibility)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e.target.checked,
                        -1,
                        setCheckedEligibility
                      )
                    }
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="適格"
                  control={
                    <Checkbox
                      checked={checkedEligibility[0]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          0,
                          setCheckedEligibility
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="不適格"
                  control={
                    <Checkbox
                      checked={checkedEligibility[1]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          1,
                          setCheckedEligibility
                        )
                      }
                    />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="業種"
                control={
                  <Checkbox
                    checked={
                      checkedIndustry[0] &&
                      checkedIndustry[1] &&
                      checkedIndustry[2]
                    }
                    indeterminate={hasDifferentValue(checkedIndustry)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e.target.checked,
                        -1,
                        setCheckedIndustry
                      )
                    }
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="建設"
                  control={
                    <Checkbox
                      checked={checkedIndustry[0]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          0,
                          setCheckedIndustry
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="医療"
                  control={
                    <Checkbox
                      checked={checkedIndustry[1]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          1,
                          setCheckedIndustry
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="航空"
                  control={
                    <Checkbox
                      checked={checkedIndustry[2]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          2,
                          setCheckedIndustry
                        )
                      }
                    />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="該当領域"
                control={
                  <Checkbox
                    checked={
                      checkedCorrespondingRegion[0] &&
                      checkedCorrespondingRegion[1] &&
                      checkedCorrespondingRegion[2]
                    }
                    indeterminate={hasDifferentValue(
                      checkedCorrespondingRegion
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e.target.checked,
                        -1,
                        setCheckedCorrespondingRegion
                      )
                    }
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="建設"
                  control={
                    <Checkbox
                      checked={checkedCorrespondingRegion[0]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          0,
                          setCheckedCorrespondingRegion
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="医療"
                  control={
                    <Checkbox
                      checked={checkedCorrespondingRegion[1]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          1,
                          setCheckedCorrespondingRegion
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="航空"
                  control={
                    <Checkbox
                      checked={checkedCorrespondingRegion[2]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          2,
                          setCheckedCorrespondingRegion
                        )
                      }
                    />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="サービスローンチの信頼性"
                control={
                  <Checkbox
                    checked={checkedReliability[0] && checkedReliability[1]}
                    indeterminate={hasDifferentValue(checkedReliability)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e.target.checked,
                        -1,
                        setCheckedReliability
                      )
                    }
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="あり"
                  control={
                    <Checkbox
                      checked={checkedReliability[0]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          0,
                          setCheckedReliability
                        )
                      }
                    />
                  }
                />
                <FormControlLabel
                  label="なし"
                  control={
                    <Checkbox
                      checked={checkedReliability[1]}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e.target.checked,
                          1,
                          setCheckedReliability
                        )
                      }
                    />
                  }
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                label="選考状態"
                control={
                  <Checkbox
                    checked={
                      checkedSelectionCondition[0] &&
                      checkedSelectionCondition[1] &&
                      checkedSelectionCondition[2] &&
                      checkedSelectionCondition[3] &&
                      checkedSelectionCondition[4] &&
                      checkedSelectionCondition[5] &&
                      checkedSelectionCondition[6] &&
                      checkedSelectionCondition[7] &&
                      checkedSelectionCondition[8]
                    }
                    indeterminate={hasDifferentValue(checkedSelectionCondition)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e.target.checked,
                        -1,
                        setCheckedSelectionCondition
                      )
                    }
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
                ].map((label, index) => (
                  <FormControlLabel
                    key={label}
                    label={label}
                    control={
                      <Checkbox
                        checked={checkedSelectionCondition[index]}
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            index,
                            setCheckedSelectionCondition
                          )
                        }
                      />
                    }
                  />
                ))}
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Popover>

      <Tooltip title="Download CSV">
        <IconButton>
          <DownloadIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("updatedAt");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { selectedUser, tableRows, handleTableRowClick } = useModel();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    console.log("property", property);
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelected = tableRows.map((n) => n.id);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableRows.length) : 0;

  // const visibleRows = React.useMemo(
  //   () =>
  //     [...rows]
  //       .sort(getComparator(order, orderBy))
  //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
  //   [order, orderBy, page, rowsPerPage]
  // );
  const visibleRows = React.useMemo(
    () => [...tableRows].sort(getComparator(order, orderBy)),
    [tableRows, order, orderBy]
  );

  const [isMemoExpanded, setIsMemoExpanded] = React.useState<boolean>(false);

  const [staffName, setStaffName] = React.useState<string[]>([]);
  const handleStaffNameChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setStaffName(value);
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
              onRequestSort={handleRequestSort}
              rowCount={tableRows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleTableRowClick(row.id)}
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
        in={!!selectedUser}
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
                    <Stack spacing={0.5}>
                      <Typography variant="body2">
                        {selectedUser?.profile.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">Email</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      {selectedUser?.profile.email}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">国</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      {selectedUser?.profile.country.submittedAt}（受付時）/{" "}
                      {selectedUser?.profile.country.createdAt}（提出時）/{" "}
                      {selectedUser?.profile.country.updatedAt}(更新時)
                    </Typography>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">ID</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      {selectedUser?.profile.id}
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
                    <Stack spacing={0.5}>
                      <Typography variant="body2">
                        {selectedUser?.organization.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">組織サイト</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Link
                        variant="body2"
                        href={selectedUser?.organization.organizationSite}
                        rel="noopener"
                        target="_blank"
                      >
                        {selectedUser?.organization.organizationSite}
                      </Link>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">サービスサイト</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Link
                        variant="body2"
                        href={selectedUser?.organization.serviceSite}
                        rel="noopener"
                        target="_blank"
                      >
                        {selectedUser?.organization.serviceSite}
                      </Link>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">ID</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body2">
                      {selectedUser?.organization.id}
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
                  <Grid size={9}>
                    <Stack spacing={1}>
                      {selectedUser?.application.files.map((file) => (
                        <Stack spacing={0.5} key={file.url}>
                          <Link
                            variant="body2"
                            href={file.url}
                            rel="noopener"
                            target="_blank"
                          >
                            {file.fileName}
                          </Link>

                          <Typography
                            variant="body2"
                            color="textDisabled"
                            sx={{ fontSize: 10 }}
                          >
                            更新日: 2020/10/11 10:10:10
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">メモ</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Box bgcolor={"#EEEEEE"} sx={{ p: 1 }} borderRadius={1}>
                        <Typography
                          variant="body2"
                          onClick={() =>
                            setIsMemoExpanded((currentValue) => !currentValue)
                          }
                        >
                          {selectedUser?.application.memo.slice(0, 50)}
                          {selectedUser?.application.memo.slice(
                            50,
                            selectedUser?.application.memo.length
                          ) && isMemoExpanded
                            ? null
                            : "..."}
                          <Collapse
                            in={isMemoExpanded}
                            timeout="auto"
                            unmountOnExit
                          >
                            {selectedUser?.application.memo.slice(
                              50,
                              selectedUser?.application.memo.length
                            )}
                          </Collapse>
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">
                      サービスローンチ有無
                    </Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Box bgcolor={"#EEEEEE"} sx={{ p: 1 }} borderRadius={1}>
                        <Typography
                          variant="body2"
                          onClick={() =>
                            setIsMemoExpanded((currentValue) => !currentValue)
                          }
                        >
                          {selectedUser?.application.memo.slice(0, 50)}
                          {selectedUser?.application.memo.slice(
                            50,
                            selectedUser?.application.memo.length
                          ) && isMemoExpanded
                            ? null
                            : "..."}
                          <Collapse
                            in={isMemoExpanded}
                            timeout="auto"
                            unmountOnExit
                          >
                            {selectedUser?.application.memo.slice(
                              50,
                              selectedUser?.application.memo.length
                            )}
                          </Collapse>
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">国内実績有無</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Box bgcolor={"#EEEEEE"} sx={{ p: 1 }} borderRadius={1}>
                        <Typography
                          variant="body2"
                          onClick={() =>
                            setIsMemoExpanded((currentValue) => !currentValue)
                          }
                        >
                          {selectedUser?.application.memo.slice(0, 50)}
                          {selectedUser?.application.memo.slice(
                            50,
                            selectedUser?.application.memo.length
                          ) && isMemoExpanded
                            ? null
                            : "..."}
                          <Collapse
                            in={isMemoExpanded}
                            timeout="auto"
                            unmountOnExit
                          >
                            {selectedUser?.application.memo.slice(
                              50,
                              selectedUser?.application.memo.length
                            )}
                          </Collapse>
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">海外実績有無</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Box bgcolor={"#EEEEEE"} sx={{ p: 1 }} borderRadius={1}>
                        <Typography
                          variant="body2"
                          onClick={() =>
                            setIsMemoExpanded((currentValue) => !currentValue)
                          }
                        >
                          {selectedUser?.application.memo.slice(0, 50)}
                          {selectedUser?.application.memo.slice(
                            50,
                            selectedUser?.application.memo.length
                          ) && isMemoExpanded
                            ? null
                            : "..."}
                          <Collapse
                            in={isMemoExpanded}
                            timeout="auto"
                            unmountOnExit
                          >
                            {selectedUser?.application.memo.slice(
                              50,
                              selectedUser?.application.memo.length
                            )}
                          </Collapse>
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">英語話者の有無</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Box bgcolor={"#EEEEEE"} sx={{ p: 1 }} borderRadius={1}>
                        <Typography
                          variant="body2"
                          onClick={() =>
                            setIsMemoExpanded((currentValue) => !currentValue)
                          }
                        >
                          {selectedUser?.application.memo.slice(0, 50)}
                          {selectedUser?.application.memo.slice(
                            50,
                            selectedUser?.application.memo.length
                          ) && isMemoExpanded
                            ? null
                            : "..."}
                          <Collapse
                            in={isMemoExpanded}
                            timeout="auto"
                            unmountOnExit
                          >
                            {selectedUser?.application.memo.slice(
                              50,
                              selectedUser?.application.memo.length
                            )}
                          </Collapse>
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">調達累計金額（USD）</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Typography variant="body2">10000</Typography>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">ラウンド</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Typography variant="body2">シード</Typography>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid spacing={1} direction={"row"} container>
                  <Grid size={3}>
                    <Typography variant="body2">設立年次</Typography>
                  </Grid>
                  <Grid size={9}>
                    <Stack spacing={0.5}>
                      <Typography variant="body2">2019</Typography>

                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{ fontSize: 10 }}
                      >
                        更新日: 2020/10/11 10:10:10
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>

              <Stack>
                <Typography variant="caption" component={"p"}>
                  受付日時: {selectedUser?.submittedAt}
                </Typography>
                <Typography variant="caption" component={"p"}>
                  提出日時: {selectedUser?.createdAt}
                </Typography>
                <Typography variant="caption" component={"p"}>
                  更新日時: {selectedUser?.updatedAt}
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
                        <Select<string[]>
                          multiple
                          native
                          value={staffName}
                          // @ts-ignore Typings are not considering `native`
                          onChange={handleStaffNameChange}
                          inputProps={{
                            id: "select-multiple-native",
                          }}
                          size="small"
                        >
                          {[
                            "久留卯 一郎",
                            "久留卯 二郎",
                            "久留卯 三郎",
                            "久留卯 四郎",
                            "久留卯 五郎",
                          ].map((name) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </Select>
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
                          <option value={10}>1次選考通過</option>
                          <option value={15}>1次選考落選</option>
                          <option value={20}>2次選考通過</option>
                          <option value={25}>2次選考落選</option>
                          <option value={30}>最終選考通過</option>
                          <option value={35}>最終選考落選</option>
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
