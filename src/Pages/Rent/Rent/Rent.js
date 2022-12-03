import { Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RentCard from "../RentCard/RentCard";
import RentPropertyFilter from "../RentPropertyFilter/RentPropertyFilter";
import NotFoundData from "../../../Component/NotFoundData";
import { Box } from "@mui/system";
import Loader from "../../../Component/Loader";

const Rent = () => {
  const [rentProperty, setRentProperty] = useState([]);
  const [filterRent, setFilterRent] = useState(rentProperty);
  const [isLoading, setIsLoading] = useState(true);

  // getting all rent property data
  useEffect(() => {
    fetch("rent-data.json")
      .then((res) => res.json())
      .then((data) => {
        setRentProperty(data);
        setFilterRent(data);
        setIsLoading(false);
      });
  }, []);

  // search input filter
  const handleSearchInputFilter = (searchText) => {
    const searchItem = rentProperty?.filter(
      (searchItems) =>
        searchItems?.name.toLowerCase().includes(searchText) ||
        searchItems?.type.toLowerCase().includes(searchText)
    );
    setFilterRent(searchItem);
  };
  // if (isLoading) {
  //   return (
  //     <Box sx={{ pt: 0.5 }}>
  //       <Skeleton />
  //       <Skeleton width="60%" />
  //     </Box>
  //   );
  // }
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
            onChange={(e) => handleSearchInputFilter(e.target.value)}
          />
        </Box>

        {/** Rent Property Filter Panel */}
        <RentPropertyFilter
          rentProperty={rentProperty}
          setFilterRent={setFilterRent}
          isLoading={isLoading}
        />

        {/** Rent Property Card */}
        {filterRent.length > 0 ? (
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            sx={{ marginY: "1rem", marginX: "auto" }}
          >
            {filterRent?.map((property) => (
              <RentCard property={property} key={Math.random()} />
            ))}
          </Grid>
        ) : /** Data Not Found Alert */
        !isLoading ? (
          <NotFoundData />
        ) : (
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            sx={{ marginY: "1rem", marginX: "auto" }}
          >
            {[...Array(6).keys()].map((n) => (
              <Grid key={Math.random()} item xs={12} sm={6} md={4} lg={4}>
                <Loader />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Rent;
