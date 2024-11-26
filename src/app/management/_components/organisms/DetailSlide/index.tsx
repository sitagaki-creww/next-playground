"use client";

import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Button,
  Collapse,
  Divider,
  FormControl,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  NativeSelect,
  Select,
  Slide,
  Stack,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import RowDivider from "../../molecules/RowDivider";
import { Application } from "@/app/management/_domain/application";
import { useModel } from "./model";
import { ExpandingText } from "../../molecules/ExpandingText";
import { AddingStaffDialog } from "../../molecules/AddingStaffDialog";

type Props = {
  application: Application | undefined;
};

export const DetailSlide = ({ application }: Props) => {
  const {
    isMemoExpanded,
    isServiceLaunchExpanded,
    isAchievementExpanded,
    isAchievementOfAbroadExpanded,
    isHaveEnglishSpeakerExpanded,
    handleExpandEvent,
    staffName,
    handleStaffNameChange,
    industry,
    handleIndustryChange,
    correspondingRegion,
    handleCorrespondingRegionChange,
    eligibility,
    handleEligibilityChange,
    reliabilityOfServiceLaunch,
    handleReliabilityOfServiceLaunchChange,
    selectionCondition,
    handleSelectionConditionChange,
    openAddingStaffDialog,
    closeAddingStaffDialog,
    isAddingStaffDialogOpen,
  } = useModel();

  return (
    <Slide
      direction="left"
      in={!!application}
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
                      {application?.profile.name.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.profile.name.updatedAt}
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
                    {application?.profile.email}
                  </Typography>
                </Grid>
              </Grid>

              <Grid spacing={1} direction={"row"} container>
                <Grid size={3}>
                  <Typography variant="body2">国</Typography>
                </Grid>
                <Grid size={9}>
                  <Typography variant="body2">
                    {application?.profile.country.submittedAt}（受付時）/{" "}
                    {application?.profile.country.createdAt}（提出時）/{" "}
                    {application?.profile.country.updatedAt}(更新時)
                  </Typography>
                </Grid>
              </Grid>

              <Grid spacing={1} direction={"row"} container>
                <Grid size={3}>
                  <Typography variant="body2">ID</Typography>
                </Grid>
                <Grid size={9}>
                  <Typography variant="body2">
                    {application?.profile.id}
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
                      {application?.organization.name.value}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.organization.name.updatedAt}
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
                      href={application?.organization.organizationSite.value}
                      rel="noopener"
                      target="_blank"
                    >
                      {application?.organization.organizationSite.value}
                    </Link>

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日:{" "}
                      {application?.organization.organizationSite.updatedAt}
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
                      href={application?.organization.serviceSite.value}
                      rel="noopener"
                      target="_blank"
                    >
                      {application?.organization.serviceSite.value}
                    </Link>

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.organization.serviceSite.updatedAt}
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
                    {application?.organization.id}
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
                    {application?.application.files.map((file) => (
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
                          更新日: {file.updatedAt}
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
                    <ExpandingText
                      onClick={() => handleExpandEvent("memo")}
                      isExpanded={isMemoExpanded}
                      text={application?.application.memo.value ?? ""}
                    />

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日:{application?.application.memo.updatedAt}
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
                    <ExpandingText
                      onClick={() => handleExpandEvent("serviceLaunch")}
                      isExpanded={isServiceLaunchExpanded}
                      text={application?.application.serviceLaunch.value ?? ""}
                    />

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.application.serviceLaunch.updatedAt}
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
                    <ExpandingText
                      onClick={() => handleExpandEvent("achievement")}
                      isExpanded={isAchievementExpanded}
                      text={application?.application.achievement.value ?? ""}
                    />

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.application.achievement.updatedAt}
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
                    <ExpandingText
                      onClick={() => handleExpandEvent("achievementOfAbroad")}
                      isExpanded={isAchievementOfAbroadExpanded}
                      text={
                        application?.application.achievementOfAbroad.value ?? ""
                      }
                    />

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日:{" "}
                      {application?.application.achievementOfAbroad.updatedAt}
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
                    <ExpandingText
                      onClick={() => handleExpandEvent("haveEnglishSpeaker")}
                      isExpanded={isHaveEnglishSpeakerExpanded}
                      text={
                        application?.application.haveEnglishSpeaker.value ?? ""
                      }
                    />

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日:{" "}
                      {application?.application.haveEnglishSpeaker.updatedAt}
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
                    <Typography variant="body2">
                      {application?.application.capital.value}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.application.capital.updatedAt}
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
                    <Typography variant="body2">
                      {application?.application.round.value}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日: {application?.application.round.updatedAt}
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
                    <Typography variant="body2">
                      {application?.application.establishmentDate.value}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textDisabled"
                      sx={{ fontSize: 10 }}
                    >
                      更新日:{" "}
                      {application?.application.establishmentDate.updatedAt}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>

            <Stack>
              <Typography variant="caption" component={"p"}>
                受付日時: {application?.submittedAt}
              </Typography>
              <Typography variant="caption" component={"p"}>
                提出日時: {application?.createdAt}
              </Typography>
              <Typography variant="caption" component={"p"}>
                更新日時: {application?.updatedAt}
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
                    <Stack spacing={0.5}>
                      <Stack
                        spacing={0.5}
                        direction={"row"}
                        divider={<span>/</span>}
                      >
                        <Typography variant="body2">久留卯 一郎</Typography>
                        <Typography variant="body2">久留卯 二郎</Typography>
                        <Typography variant="body2">久留卯 三郎</Typography>
                      </Stack>
                      <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        size="small"
                        sx={{ alignSelf: "flex-end" }}
                        onClick={openAddingStaffDialog}
                      >
                        Add
                      </Button>

                      <AddingStaffDialog
                        isOpen={isAddingStaffDialogOpen}
                        onClose={closeAddingStaffDialog}
                      />
                    </Stack>
                    {/* 
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
                    </FormControl> */}
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
                    variant="outlined"
                    startIcon={<SendIcon />}
                    size="small"
                    sx={{ alignSelf: "flex-end" }}
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
};
