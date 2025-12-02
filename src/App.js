import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { PortfolioProvider } from './contexts/PortfolioContext';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import WorkPage from './components/WorkPage';
import NoPage from "./components/NoPage";

function App() {

  // Setup routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/:id" element={<WorkPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    )
  );
  return (
    <PortfolioProvider>
      <RouterProvider router={router} />
    </PortfolioProvider>
  )
}

export default App;