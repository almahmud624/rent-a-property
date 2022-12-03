import React, { useContext } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const location = useLocation("");
  const { createUser, updateUserProfile, userLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    if (location.pathname === "/login") {
      userLogIn(email, password)
        .then((data) => {
          if (data.user.uid) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error.code.split("/")[1].split("-").join(" "));
        });
    } else {
      createUser(email, password)
        .then((data) => {
          navigate("/");
          updateUserProfile({ displayName: name })
            .then((data) => {})
            .catch((error) => {
              console.log(error.code.split("/")[1].split("-").join(" "));
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {location.pathname === "/signup" ? "Sign up" : "Login"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {location.pathname === "/signup" && (
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
              backgroundColor: "secondary.main",
              color: "#fff",
              borderRadius: "7px",
              textTransform: "inherit",
              boxShadow: "none",
              border: "1px solid transparent",
              ":hover": {
                backgroundColor: "transparent",
                color: "secondary.main",
                boxShadow: "none",
                border: "1px solid #6F66F8",
              },
              marginY: "1rem",
            }}
          >
            {location.pathname === "/signup" ? "Sign up" : "Login"}
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              {location.pathname === "/signup" ? (
                <Typography>
                  Already have an account?
                  <Link to="/login" variant="body2">
                    Sign in
                  </Link>
                </Typography>
              ) : (
                <Typography>
                  You don't have rent property account?
                  <Link to="/signup" variant="body2">
                    Create One
                  </Link>
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
