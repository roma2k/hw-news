import { useNavigate } from "react-router-dom";
import { mainApi } from "../../api";
import { ShortItemWrapper } from "./helpers";

const MainPage: React.FC = () => {
  const {
    data: newsList,
    isLoading,
    isSuccess,
  } = mainApi.useGetNewsListQuery(100, {
    pollingInterval: 60000,
  });

  const navigate = useNavigate();
  return (
    <>
      {isSuccess ? (
        <ul>
          {newsList.map((item) => (
            <li
              onClick={() => navigate(`/item/${item}`)}
              style={{ cursor: "pointer" }}
            >
              <ShortItemWrapper id={item} />
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
