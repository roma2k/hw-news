import { useNavigate } from "react-router-dom";
import { mainApi } from "../../api";
import { ShortItem } from "../../Components";

const MainPage: React.FC = () => {
  const { data: newsList, isSuccess } = mainApi.useGetNewsListQuery(100, {
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
              <ShortItem id={item} />
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
