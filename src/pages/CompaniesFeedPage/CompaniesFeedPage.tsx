import { Container, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getCompanies } from "../../api/companies";

import { CompanyCard } from "./CompanyCard";

export const CompaniesFeedPage: React.FC = () => {
  const { data: companies } = useCompaniesQuery();

  if (!companies) {
    return null;
    // @todo manage loading and error states
  }

  return (
    <Container maxWidth="md">
      <h1>Companies</h1>

      <Stack spacing={3}>
        {companies.map((company) => (
          <CompanyCard company={company} key={company.domain} />
        ))}
      </Stack>
    </Container>
  );
};

// can be extracted into its own file if reused
const useCompaniesQuery = () => useQuery({ queryKey: ["companies"], queryFn: getCompanies });
