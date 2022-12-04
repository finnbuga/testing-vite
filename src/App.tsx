import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CompaniesFeedPage } from "./pages/CompaniesFeedPage";

const App: React.FC = () => (
  <QueryClientProvider client={new QueryClient()}>
    <CompaniesFeedPage />
  </QueryClientProvider>
);

export default App;
