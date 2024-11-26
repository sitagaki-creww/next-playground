"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Checkbox, Stack } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

type Props = {
  isOpen: boolean;
  selectedValue?: string;
  onClose: (value: string) => void;
};

export const AddingStaffDialog = ({
  isOpen,
  selectedValue,
  onClose,
}: Props) => {
  const handleClose = () => {
    onClose(selectedValue ?? "");
  };

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      className="detailTarget"
      fullWidth
    >
      <DialogTitle>担当者の選択</DialogTitle>
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {["久留卯 一郎", "久留卯 二郎", "久留卯 三郎"].map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(index)}
                  checked={checked.includes(index)}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={value}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Stack
        direction={"row"}
        spacing={3}
        justifyContent={"flex-end"}
        sx={{ p: 2 }}
      >
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleClose}>
          OK
        </Button>
      </Stack>
    </Dialog>
  );
};
