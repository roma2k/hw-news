import { useNavigate, useParams } from "react-router-dom";
import { mainApi } from "../../api";
import { useEffect } from "react";

const NewsOneItem: React.FC = () => {
  const [getItem, { isLoading: oneLoading, isFetching, data: oneNewsItem }] =
    mainApi.useLazyGetItemQuery({});

  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    params?.id &&
      getItem(Number(params.id), true).unwrap()
        .then((e) => {
          e === null && navigate("/error");
        })
        .catch(() => {
          navigate("/error");
        });
  }, [params]);

  return (
    <div>
      onenews
      {oneNewsItem &&
        (oneLoading || isFetching ? (
          <>...loading</>
        ) : (
          <>
            <h3>{oneNewsItem.title}</h3>
            <p>
              <small>{String(new Date(oneNewsItem.time * 1000))}</small>
            </p>
          </>
        ))}
    </div>
  );
};

export default NewsOneItem;
