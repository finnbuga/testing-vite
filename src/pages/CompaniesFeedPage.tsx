import {
  Container,
  Stack,
  Card,
  Paper,
  CardActionArea,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getCompanies } from "../api/companies";

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
          <Card key={company.domain}>
            <CardActionArea onClick={() => null /* go to page */}>
              <CardContent>
                <Typography variant="h5">{company.name}</Typography>
                <Link href={company.website} target="_blank">
                  {company.domain}
                </Link>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                  {company.description}
                </Typography>
                <Paper variant="outlined" sx={{ mt: 2, p: 2 }}>
                  <Stack direction="row" spacing={4}>
                    <Attribute title="Founded">{company.foundedDate}</Attribute>
                    <Attribute title="Industry">{company.industry}</Attribute>
                    <Attribute title="Total funding">{company.totalFunding}</Attribute>
                    <Attribute title="Last funding amount">{company.lastFundingAmount}</Attribute>
                  </Stack>
                </Paper>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

const Attribute: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <Typography variant="caption">{title}</Typography>
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  </div>
);

// can be extracted into its own file if reused
const useCompaniesQuery = () => useQuery({ queryKey: ["companies"], queryFn: getCompanies });
