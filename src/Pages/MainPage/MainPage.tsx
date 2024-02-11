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

  const [item, setItem] = React.useState()

  React.useEffect(() => {
    console.log(newsList);
  }, [newsList]);
  return (
    <>
      {isSuccess ? (
        <ul>
          {newsList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export default MainPage;
