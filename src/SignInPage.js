import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ezilogo from "../src/EZAMAZWE LOGO.jpg";
import { InputLabel } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "70px", backgroundColor: "#f5f5f5" }}
      >
        <CssBaseline />
        {/* THIS IS THE IMAGE SIDE OF THE FORM */}
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={ezilogo}
            alt="Logo"
            style={{ width: "90%", maxWidth: "500px" }}
          />
        </Grid>

        {/* White form container , this is the form container  */}
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: "#1C3F53",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* this is the container for the form */}
          <Paper
            elevation={0}
            square
            sx={{ backgroundColor: "#1C3F53", width: 900, height: "100vh" }}
          >
            <Box
              sx={{
                my: 15,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "800px",
                width: "100%",
                // borderRadius: "px",
                backgroundColor: "white", // White background for the form
                p: 3, // Padding inside the form container
              }}
            >
              <Typography component="h1" variant="h4" mt={3} mb={2}>
                EZAMAZWE EDUTECH
              </Typography>

              <Typography component="h1" variant="h5">
                Login to your account
              </Typography>
              {/* Box container for form*/}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, width: "90%", maxWidth: "70%" }}
              >
                {/* Form fields */}
                <Box sx={{ marginBottom: 2 }}>
                  <InputLabel sx={{ color: "#1C3F53" }}>
                    Email address
                  </InputLabel>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <InputLabel sx={{ color: "red" }}>
                    *email address is invalid
                  </InputLabel>
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                  <InputLabel sx={{ color: "#1C3F53" }}>Password</InputLabel>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <InputLabel sx={{ color: "red" }}>
                    *password entered is invalid
                  </InputLabel>
                </Box>
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                <Link
                  href="#"
                  variant="body2"
                  mt={2}
                  sx={{
                    flex: 1,
                    marginLeft: 0,
                    padding: -1,
                    direction: "left",
                    flexDirection: "left",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  Forgot password?
                </Link>
         
                <Box
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#1C3F53",
                      height: "71px",
                      borderRadius: "30px", // Changes the radius of the button size
                      width: "100%", // Button takes up 100% width of the parent Box
                    }}
                  >
                    Sign In
                  </Button>
                </Box>

                {/* <Grid container>...</Grid> */}
                
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
