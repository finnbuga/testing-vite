import data from "../api/companies.json";

export interface Company {
  name: string;
  domain: string; // can treat this as unique identifier?
  website: string;
  foundedDate: number;
  description: string;
  industry: string;
  categoryGroups: string[] | string; // @todo
  categories: string[] | string; // @todo
  tags: string[] | string; // @todo
  hqLocation: string;
  hqRegion: string;
  totalFunding: number;
  lastFundingAmount: number;
  lastFundingDate: string;
  lastFundingType:
    | "Seed"
    | "Series A"
    | "Series B"
    | "Series C"
    | "Series D"
    | "Initial Coin Offering"
    | "Grant"; // @todo list all possibilities]
  numberOfFundingRounds: number;
  numberOfInvestors: number;
  investors: string[] | string; // @todo
  acquiredBy: string;
  acquisitionDate: string;
  // @todo finish this
}

interface RawCompanyData {
  "Company Name": string;
  Domain: string; // can treat this as unique identifier?
  Website: string;
  "Founded Date": number;
  Description: string;
  Industry: string;
  "Category Groups": string[] | string; // @todo
  Categories: string[] | string; // @todo
  Tags: string[] | string; // @todo
  "HQ Location": string;
  "HQ Region": string;
  "Total Funding Amount (in USD)": number;
  "Last Funding Amount (in USD)": number;
  "Last Funding Date": string;
  "Last Funding Type":
    | "Seed"
    | "Series A"
    | "Series B"
    | "Series C"
    | "Series D"
    | "Initial Coin Offering"
    | "Grant"; // @todo list all possibilities]
  "Number of Funding Rounds": number;
  "Number of Investors": number;
  Investors: string[] | string; // @todo
  "Acquired By": string;
  "Acquisition Date": string;
  // @todo finish this
}

export const getCompanies = () => {
  const companies = (data as RawCompanyData[]).slice(0, 20).map((data) => ({
    // thanks Copilot for generating this
    name: data["Company Name"],
    domain: data.Domain,
    website: data.Website,
    foundedDate: data["Founded Date"],
    description: data.Description,
    industry: data.Industry,
    categoryGroups: data["Category Groups"],
    categories: data.Categories,
    tags: data.Tags,
    hqLocation: data["HQ Location"],
    hqRegion: data["HQ Region"],
    totalFunding: data["Total Funding Amount (in USD)"],
    lastFundingAmount: data["Last Funding Amount (in USD)"],
    lastFundingDate: data["Last Funding Date"],
    lastFundingType: data["Last Funding Type"],
    numberOfFundingRounds: data["Number of Funding Rounds"],
    numberOfInvestors: data["Number of Investors"],
    investors: data.Investors,
    acquiredBy: data["Acquired By"],
    acquisitionDate: data["Acquisition Date"],
  }));

  return Promise.resolve(companies);
};
