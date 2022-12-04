import { useQuery } from "@tanstack/react-query";

import { getCompanies } from "../api/companies";

export const CompaniesFeedPage: React.FC = () => {
  const { data: companies } = useCompaniesQuery();

  if (!companies) {
    return null;
    // @todo manage loading and error states
  }

  return (
    <>
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.name}>
            <a href={`/companies/${company.name}`}>{company.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

// can be extracted into its own file if reused
const useCompaniesQuery = () => useQuery({ queryKey: ["companies"], queryFn: getCompanies });
