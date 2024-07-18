"use client";

import { Box, Grid, AlertIcon, Alert } from "@chakra-ui/react";
import { CountryCard } from "./components/CountryCard";
import { useCountries } from "./hooks/useCountries";
import { SkeletonGrid } from "./components/SkeletonGrid";

export type CountryType = {
  name: {
    official: string;
  };
  capital: string[];
  population: number;
  maps: {
    googleMaps: string;
  };
};

export const Countries: React.FC = () => {
  const { countries, error, isLoading } = useCountries();

  return (
    <Box>
      {isLoading ? (
        <SkeletonGrid />
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gridGap={10}
        >
          {countries.map((country) => (
            <CountryCard key={country.name.official} country={country} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
