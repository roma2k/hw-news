import { useParams } from "react-router-dom";
import { mainApi } from "../../api";
import { Comment } from "../../Components";

const NewsOneItem: React.FC = () => {
  const params = useParams<{ id: string }>();
  const { data: item, isFetching } = mainApi.useGetItemQuery(
    Number(params.id),
    { pollingInterval: 10000 }
  );

  return (
    <div>
      {item && (
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
            {item?.kids?.map((comment) => (
              <Comment id={comment} key={comment} parentFetching={isFetching} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsOneItem;
