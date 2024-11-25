"use client";

import {
  Application,
  ApplicationForTable,
} from "@/app/management/_domain/application";
import DownloadIcon from "@mui/icons-material/Download";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Checkbox, FormControlLabel, Popover, Stack } from "@mui/material";
import Box from "@mui/material/Box";
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
import ColumnDivider from "../../molecules/ColumnDivider";
import { DetailSlide } from "../../molecules/DetailSlide";
import { useModel } from "./model";

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

type Props = {
  applicationList: Application[];
};

export const ApplicationTable = ({ applicationList }: Props) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof ApplicationForTable>("updatedAt");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { HEAD_CELLS, selectedApplication, tableRows, handleTableRowClick } =
    useModel({ applicationList });

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof ApplicationForTable
  ) => {
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

  const createSortHandler =
    (property: keyof ApplicationForTable) =>
    (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const numSelected = selected.length;

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
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
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
                        indeterminate={hasDifferentValue(
                          checkedSelectionCondition
                        )}
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

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
            className={"detailTarget"}
          >
            <TableHead>
              <TableRow>
                {HEAD_CELLS.map((headCell) => (
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
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

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
                    <TableCell>{row.selectionCondition}</TableCell>
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

      <DetailSlide application={selectedApplication} />
    </Box>
  );
};
