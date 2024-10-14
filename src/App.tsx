import { Global, ThemeProvider } from "@emotion/react";
import { homeRoutes } from "@routes";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [...homeRoutes];

const router = createBrowserRouter(routes);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
