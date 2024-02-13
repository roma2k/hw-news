import { useNavigate, useParams } from "react-router-dom";
import { mainApi } from "../../api";
import { useEffect } from "react";
import { Comment } from '../../Components'

const NewsOneItem: React.FC = () => {
  const [getItem, { isLoading: isFetching, data: item }] =
    mainApi.useLazyGetItemQuery({pollingInterval: 60000});

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
  }, [params, getItem, navigate]);

  return (
    <div>
      {item &&
        <div>
        <h3>{item.title}</h3>
        <div>
          <p>
            <small>{String(new Date(item.time * 1000))}</small>
          </p>
          {item?.text && <p>{item.text}</p>}
          <p>
            Go ahead{" "}
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.url}
            </a>
          </p>
        </div>
        <div>
          {item.kids &&
            item.kids.map((comment) => <Comment id={comment} key={comment} parentFetching={isFetching} />)}
        </div>
      </div>}
    </div>
  );
};

export default NewsOneItem;
