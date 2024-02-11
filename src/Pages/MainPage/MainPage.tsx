import { useNavigate } from "react-router-dom";
import { mainApi } from "../../api";
import React from "react";

const MainPage: React.FC = () => {
  const {
    data: newsList,
    isLoading,
    isSuccess,
  } = mainApi.useGetNewsListQuery(10, {
    pollingInterval: 60000,
  });

  const navigate = useNavigate();
  return (
    <>
      {isSuccess ? (
        <ul>
          {newsList.map((item) => (
            <li
              key={item}
              onClick={() => navigate(`/item/${item}`)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export default MainPage;
