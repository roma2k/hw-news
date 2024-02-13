import React, { useEffect, useState } from "react";
import { mainApi } from "../../api";

const Comment: React.FC<{ id: number; parentFetching: boolean }> = ({
  id,
  parentFetching,
}) => {
  const [kids, setKids] = useState(false);

  const {
    data: item,
    refetch: getItem,
    isFetching,
  } = mainApi.useGetItemQuery(id, {
    refetchOnFocus: true,
  });

  useEffect(() => {
    parentFetching && getItem();
  }, [parentFetching, getItem]);

  return (
    <div>
      <h3>Comment {id}</h3>
      <p>{item?.title}</p>
      <p>{item?.text}</p>
      <div style={{ marginLeft: 50 }}>
        {item?.kids && (
          <>
            <div>
              {kids ? (
                <button onClick={() => getItem()}>Обновить</button>
              ) : (
                <button onClick={() => setKids(true)}>
                  Загрузить дочерние
                </button>
              )}
            </div>
            <div>
              {kids &&
                item.kids.map((comment) => (
                  <Comment
                    id={comment}
                    key={comment}
                    parentFetching={isFetching}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
