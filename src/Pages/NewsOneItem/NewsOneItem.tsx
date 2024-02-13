import { useParams } from "react-router-dom";
import { mainApi } from "../../api";
import { Comment } from "../../Components";

const NewsOneItem: React.FC = () => {
  const params = useParams<{ id: string }>();
  const {
    data: item,
    isFetching,
    refetch,
  } = mainApi.useGetItemQuery(Number(params.id), { pollingInterval: 60000 });

  return (
    <div>
      {item && (
        <div>
          <h1>{item.title}</h1>
          <div>
            <p>
              <small>{String(new Date(item.time * 1000))}</small>
            </p>
            {item?.text && <p>{item.text}</p>}
            <p>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.url}
              </a>
            </p>
          </div>
          <div>
            <h2>Comments</h2>
            <p>
              <button onClick={refetch}>Renew comments</button>
            </p>
            {item?.kids ? (
              item?.kids?.map((comment) => (
                <Comment
                  id={comment}
                  key={comment}
                  parentFetching={isFetching}
                />
              ))
            ) : (
              <>Empty</>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsOneItem;
