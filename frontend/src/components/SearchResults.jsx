import React from "react";
import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { searchQuery, selectedCategory } = location.state;

  // Perform your search logic here (e.g., fetch data from API)
  // Example: Fetch search results based on searchQuery and selectedCategory

  return (
    <Container>
      <Typography variant="h4">Search Results</Typography>
      <Typography variant="h6">
        Results for "{searchQuery}" in category "{selectedCategory}"
      </Typography>
      {/* Display your search results here */}
    </Container>
  );
};

export default SearchResults;
