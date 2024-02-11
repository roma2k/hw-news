import { Route, Routes } from "react-router-dom";
import { ErrorPage, MainPage } from "../Pages";
import { Layout } from "../Layout";

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
{/*           <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
};

export default MainRoutes;
