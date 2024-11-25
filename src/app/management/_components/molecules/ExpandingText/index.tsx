"use client";

import { Box, Collapse, Typography } from "@mui/material";

type Props = {
  text: string;
  onClick: () => void;
  isExpanded: boolean;
};

export const ExpandingText = ({ text, onClick, isExpanded }: Props) => {
  const SLICE_POINT = 100;
  const primaryText = text.slice(0, SLICE_POINT);
  const secondaryText = text.slice(SLICE_POINT, text.length);

  return (
    <Box
      bgcolor={"#EEEEEE"}
      sx={{ p: 1, border: 0, cursor: "pointer", textAlign: "left" }}
      borderRadius={1}
      onClick={onClick}
      component={"button"}
      type="button"
    >
      <Typography variant="body2" component="span">
        {primaryText}
        {secondaryText && !isExpanded ? "..." : ""}

        {secondaryText && (
          <Collapse
            in={isExpanded}
            timeout="auto"
            unmountOnExit
            component="span"
            sx={{ display: "block" }}
          >
            {secondaryText}
          </Collapse>
        )}
      </Typography>
    </Box>
  );
};
