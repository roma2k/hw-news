import { Route, Routes } from "react-router-dom";
import { ErrorPage, MainPage, NewsOneItem } from "../Pages";
import { Layout } from "../Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/item/:id" element={<NewsOneItem />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
