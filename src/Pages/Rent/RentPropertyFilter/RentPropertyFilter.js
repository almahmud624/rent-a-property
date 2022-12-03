import React from "react";
import { Button, Divider, MenuItem } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const location = ["Concho", "Somerset", "Healy"];
const propertyTypes = ["Farmhouse", "Townhome", "Houses"];

const RentPropertyFilter = ({ rentProperty, setFilterRent }) => {
  const [city, setCity] = useState("Concho");
  const [price, setPrice] = useState("500-1000");
  const [propertyType, setPropertyType] = useState("Houses");
  const [date, setDate] = useState();

  // get location
  const handleCityChange = (value) => {
    setCity(value);
  };
  // get price
  const handlePriceChange = (value) => {
    setPrice(value);
  };
  // get property type
  const handlePropertyType = (value) => {
    setPropertyType(value);
  };
  // get date
  const handleChange = (value) => {
    setDate(dayjs(value).format("MM/DD/YYYY"));
  };

  // filter by selected option
  const handleSearchFilter = () => {
    const lowerPrice = Number(price.split("-")[0]);
    const upperPrice = Number(price.split("-")[1]);
    console.log(lowerPrice, upperPrice);

    const filteredRent = rentProperty.filter(
      (property) =>
        property.city === city &&
        property.type === propertyType &&
        property.price >= lowerPrice &&
        property.price <= upperPrice
    );
    setFilterRent(filteredRent);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 2,
        rowGap: 3,
      }}
    >
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth sx={{ color: "#000" }}>
          <TextField
            id="city"
            value={city}
            select
            label="Select Location"
            onChange={(e) => handleCityChange(e.target.value)}
            sx={{
              "& .MuiSelect-icon": {
                backgroundColor: "#E7E6F6",
                borderRadius: "50%",
                color: "secondary.main",
              },
            }}
            variant="standard"
            InputProps={{ disableUnderline: true }}
          >
            {location.map((city) => (
              <MenuItem key={Math.random()} value={city}>
                {city},USA
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          color: "#E7E6F6",
          borderColor: "#E7E6F6",
          height: "40px",
          alignSelf: "center",
        }}
      />
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="When"
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  sx={{
                    "& .MuiInput-root:before": { borderBottom: 0 },
                    ":hover": {
                      "& .MuiInput-root:before": { borderBottom: "none" },
                    },
                    ":focus": {
                      "& .MuiInput-root:before": { borderBottom: "none" },
                    },
                  }}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          color: "#E7E6F6",
          borderColor: "#E7E6F6",
          height: "40px",
          alignSelf: "center",
        }}
      />
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <TextField
            select
            id="price"
            value={price}
            label="Price"
            onChange={(e) => handlePriceChange(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              "& .MuiSelect-icon": {
                backgroundColor: "#E7E6F6",
                borderRadius: "50%",
                color: "secondary.main",
              },
            }}
          >
            <MenuItem value={"500-1000"}>$500 - $1000</MenuItem>
            <MenuItem value={"1000-1500"}>$1000 - $1500</MenuItem>
            <MenuItem value={"1500-2000"}>$1500 - $2000</MenuItem>
            <MenuItem value={"2000-2500"}>$2000 - $2500</MenuItem>
          </TextField>
        </FormControl>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          color: "#E7E6F6",
          borderColor: "#E7E6F6",
          height: "40px",
          alignSelf: "center",
        }}
      />
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <TextField
            select
            id="type"
            value={propertyType}
            label="Property Type"
            onChange={(e) => handlePropertyType(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              "& .MuiSelect-icon": {
                backgroundColor: "#E7E6F6",
                borderRadius: "50%",
                color: "secondary.main",
              },
            }}
          >
            {propertyTypes?.map((property) => (
              <MenuItem key={Math.random()} value={property}>
                {property}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Box>
      <Button
        variant="contained"
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
        }}
        onClick={handleSearchFilter}
        size="large"
      >
        Search
      </Button>
    </Box>
  );
};

export default RentPropertyFilter;
