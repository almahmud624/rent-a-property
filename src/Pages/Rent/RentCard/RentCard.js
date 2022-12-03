import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./RentCard.css";

const RentCard = ({ property }) => {
  const { name, price, picture, location, bed, bathroom, areaX, areaY } =
    property;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      sx={{
        "& .MuiCard-root": {
          marginX: "auto",
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          overflow: "unset",
          borderRadius: "10px",
          boxShadow: "0px 0px 0px 1px rgba(214,214,214,0.75)",
          transition: "all 0.5s",
          cursor: "pointer",
          ":hover": {
            transform: "scale(1.01)",
            transition: "all 0.5s",
          },
        }}
      >
        <Box position={"relative"}>
          <CardMedia
            component="img"
            height="194"
            image={picture}
            alt="Paella dish"
            loading="lazy"
            sx={{
              borderRadius: "10px 10px 0 0",
            }}
          />
          <Typography
            className="ribbon"
            position={"absolute"}
            bottom={-17}
            left={-10}
            color={"#fff"}
            paddingX={2}
            paddingY={0.5}
            bgcolor={"secondary.main"}
            textTransform={"uppercase"}
            fontSize={"0.8em"}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            borderRadius={2}
            paddingRight={3.3}
          >
            <IconButton aria-label="add to favorites">
              <AutoAwesomeIcon sx={{ fontSize: "0.5em", color: "#fff" }} />
            </IconButton>
            Popular
          </Typography>
        </Box>

        <CardHeader
          sx={{ paddingBottom: 1, paddingTop: 3 }}
          action={
            <IconButton
              aria-label="add to favorites"
              sx={{ border: "1px solid #ccc" }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          }
          title={
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                fontSize: "1em",
                fontWeight: "bold",
                color: "secondary.main",
              }}
            >
              ${price}
              <Typography sx={{ fontSize: "0.5em", color: "primary.main" }}>
                /month
              </Typography>
            </Box>
          }
        />
        <CardContent sx={{ paddingY: 1 }}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontSize: "1.2em", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>
        <CardActions spacing sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="add to favorites">
              <BedIcon sx={{ fontSize: "0.8em", color: "secondary.main" }} />
            </IconButton>
            <Typography sx={{ fontSize: "0.8em" }} color="text.secondary">
              {bed} Beds
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="add to favorites">
              <BathtubIcon
                sx={{ fontSize: "0.8em", color: "secondary.main" }}
              />
            </IconButton>
            <Typography sx={{ fontSize: "0.8em" }} color="text.secondary">
              {bathroom} Bathroom
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="add to favorites">
              <DashboardIcon
                sx={{ fontSize: "0.8em", color: "secondary.main" }}
              />
            </IconButton>
            <Typography sx={{ fontSize: "0.8em" }} color="text.secondary">
              {areaX}x{areaY} m<sup>2</sup>
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RentCard;
