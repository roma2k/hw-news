import { mainApi } from "../../api";
import React from "react";

export interface ione {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
const MainPage: React.FC = () => {
  const {
    data: newsList,
    isLoading,
    isSuccess,
  } = mainApi.useGetNewsListQuery(10, {
    pollingInterval: 60000,
  });

  const [getItem, { isLoading: oneLoading, isFetching }] = mainApi.useLazyGetItemQuery();

  const [item, setItem] = React.useState<number | undefined>(undefined);
  const [one, setOne] = React.useState<ione | undefined>(undefined);

  React.useEffect(() => {
    console.log(item);
    item &&
      getItem(item)
        .unwrap()
        .then((e) => setOne(e));
  }, [item]);

  return (
    <>
      {isSuccess ? (
        <ul>
          {newsList.map((item) => (
            <li key={item} onClick={() => setItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <>loading</>
      )}
      <div>
        {one &&
          (oneLoading || isFetching ? (
            <>...loading</>
          ) : (
            <>
              <h3>{one.title}</h3>
              <p>
                <small>{String(new Date(one.time * 1000))}</small>
              </p>
            </>
          ))}
      </div>
    </>
  );
};

export default MainPage;
