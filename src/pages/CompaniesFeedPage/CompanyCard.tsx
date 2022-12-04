import { Stack, Card, Paper, CardActionArea, CardContent, Typography, Link } from "@mui/material";
import React from "react";

import type { Company } from "../../api/companies";

export const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
  <Card>
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
);

const Attribute: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <Typography variant="caption">{title}</Typography>
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  </div>
);
