"use client";

import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Button,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  NativeSelect,
  Popover,
  Select,
  SelectChangeEvent,
  Slide,
  Stack,
  TextField,
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

export default function DetailSlide() {
  const { selectedUser } = useModel();

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
                  <Typography variant="body2">サービスローンチ有無</Typography>
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
                  <Typography variant="body2">調達累計金額</Typography>
                </Grid>
                <Grid size={9}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2">10000円</Typography>

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

              <Stack spacing={1.5}>
                <Typography variant="subtitle1" fontWeight={"600"}>
                  コメント
                </Typography>

                <Stack spacing={1}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    multiline
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    size="small"
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Send
                  </Button>
                </Stack>

                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Taisuke Itagaki"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="よくないと思うけどまあいいとも思うので一次選考に関しては通してもいいようなよくないようなでもなんとも言えない気もする🤔"
                      secondary={"2020/11/10 10:10:10"}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Norman reedus"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="これはなんともいえないけれどなんともいえないです。ですので安易に採用にしてはいけないようなきがしないでもないような。でもいいと思います🌷"
                      secondary={"2020/10/10 10:10:10"}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Slide>
  );
}
