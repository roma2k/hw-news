import { Link, Outlet } from "react-router-dom";
import { mainApi } from "../../api";
import React from "react";

const MainPage: React.FC = () => {
  const { data: newsList } = mainApi.useGetNewsListQuery(100, { pollingInterval: 60000 });

  React.useEffect(() => {
    console.log(newsList);
  }, [newsList]);
  return <>Mainpage</>;
};

export default MainPage;
