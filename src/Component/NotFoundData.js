import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const NotFoundData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid xs={6}>
            <Typography variant="h4">Rent Property Not Found!</Typography>
            <Typography variant="h6">Please try again..</Typography>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1669993576~exp=1669994176~hmac=94ceaf0cb0ed8759c9a319c305e4bc6c3c2f4558c9f93df45d262c05d91c39d2"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFoundData;
