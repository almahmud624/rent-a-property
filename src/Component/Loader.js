import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Loader = () => {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};

export default Loader;
