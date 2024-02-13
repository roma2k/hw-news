import { mainApi } from "../../api";
import { ShortItem } from "../../Components";

const config = {
  count: 100,
  poolingInterval: 60000,
};

const MainPage: React.FC = () => {
  const {
    data: newsList,
    isSuccess,
    refetch,
  } = mainApi.useGetNewsListQuery(config.count, {
    pollingInterval: config.poolingInterval,
  });

  return (
    <div>
      {isSuccess ? (
        <div>
          <div>
            <p>
              <button onClick={refetch}>Refresh news</button>
            </p>
          </div>
          <div>
            {newsList.map((item) => (
              <ShortItem id={item} key={item} />
            ))}
          </div>
        </div>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default MainPage;
