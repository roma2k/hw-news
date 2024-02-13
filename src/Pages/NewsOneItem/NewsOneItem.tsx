import { useNavigate, useParams } from "react-router-dom";
import { mainApi } from "../../api";
import { useEffect } from "react";

const NewsOneItem: React.FC = () => {
  const [getItem, { isLoading: oneLoading, isFetching, data: item }] =
    mainApi.useLazyGetItemQuery({});

  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    params?.id &&
      getItem(Number(params.id), true)
        .unwrap()
        .then((e) => {
          e === null && navigate("/error");
        })
        .catch(() => {
          navigate("/error");
        });
  }, [params]);

  return (
    <div>
      {item &&
        (oneLoading || isFetching ? (
          <>...loading</>
        ) : (
          <>
            <h3>{item.title}</h3>
            <p>
              <small>{String(new Date(item.time * 1000))}</small>
            </p>
            {item?.text && <p>{item.text}</p>}
          <p>Go ahead <a href={item.url} target="_blank">{item.url}</a></p>
          </>
        ))}
    </div>
  );
};

export default NewsOneItem;

