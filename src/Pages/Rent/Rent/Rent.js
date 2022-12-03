import { Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RentCard from "../RentCard/RentCard";
import RentPropertyFilter from "../RentPropertyFilter/RentPropertyFilter";
import NotFoundData from "../../../Component/NotFoundData";
import { Box } from "@mui/system";

const Rent = () => {
  const [rentProperty, setRentProperty] = useState([]);
  const [filterRent, setFilterRent] = useState(rentProperty);
  const [inputSearchText, setInputSearchText] = useState("");

  // getting all rent property data
  useEffect(() => {
    fetch("rent-data.json")
      .then((res) => res.json())
      .then((data) => {
        setRentProperty(data);
        setFilterRent(data);
      });
  }, []);
  console.log(inputSearchText);

  return (
    <Box>
      <Container maxWidth="lg" sx={{ paddingY: "2rem" }}>
        {/** Rent property section header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "3rem",
            flexWrap: "wrap",
            rowGap: 2,
          }}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Search properties to rent
          </Typography>

          <TextField
            label="Search with Search Bar"
            variant="outlined"
            size="small"
            onChange={(e) => setInputSearchText(e.target.value)}
          />
        </Box>

        {/** Rent Property Filter Panel */}
        <RentPropertyFilter
          rentProperty={rentProperty}
          setFilterRent={setFilterRent}
        />

        {/** Rent Property Card */}
        {filterRent.length > 0 ? (
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            sx={{ marginY: "1rem", marginX: "auto" }}
          >
            {filterRent
              ?.filter(
                (searchItems) =>
                  searchItems?.name.toLowerCase().includes(inputSearchText) ||
                  searchItems?.type.toLowerCase().includes(inputSearchText)
              )
              .map((property) => (
                <RentCard property={property} key={Math.random()} />
              ))}
          </Grid>
        ) : (
          /** Data Not Found Alert */
          <NotFoundData />
        )}
      </Container>
    </Box>
  );
};

export default Rent;
