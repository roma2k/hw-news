import { Link, Outlet } from "react-router-dom";
import { mainApi } from "../../api";
import React from "react";

const MainPage: React.FC = () => {
  const b = mainApi.useGetNewsListQuery("", {  pollingInterval: 60000 });

  React.useEffect(() => {
    console.log(b.data);
  }, [b]);
  return <>Mainpage</>;
};

export default MainPage;
