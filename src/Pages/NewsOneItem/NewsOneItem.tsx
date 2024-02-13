import { useParams } from "react-router-dom";
import { mainApi } from "../../api";
import { Comment } from "../../Components";
import styled from "styled-components";

const config = {
  pollingInterval: 60000,
};

const StyledNewsOneItemContainer = styled.div`
  min-height: 100px;
  margin-bottom: 20px;
  padding: 0 12px;
`;

const StyledNewsOneItemBody = styled.div`
  min-height: 100px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 0 12px;
  background: #f5e2c6;

  .comments-bottom {
    display: flex;
    gap: 20px;
  }
`;

const NewsOneItem: React.FC = () => {
  const params = useParams<{ id: string }>();
  const {
    data: item,
    isFetching,
    refetch,
  } = mainApi.useGetItemQuery(Number(params.id), config);

  return (
    <StyledNewsOneItemContainer>
      {item && (
        <>
          <StyledNewsOneItemBody>
            <h3>{item?.title}</h3>
            <p>
              <a href={item?.url}>{item?.url} </a>
            </p>
            <div className="comments-bottom">
              <div>
                <p>
                  <small>Rating: {item?.score || "n/a"}</small>
                </p>
              </div>
              <div>
                <p>
                  <small>Author: {item?.by || "n/a"}</small>
                </p>
              </div>
              <div>
                <p>
                  <small>
                    Date:{" "}
                    {(item?.time &&
                      new Date(item?.time * 1000).toDateString()) ||
                      "n/a"}
                  </small>
                </p>
              </div>
              <div>
                <p>
                  <small>Comments: {item?.descendants ?? "0"}</small>
                </p>
              </div>
            </div>
          </StyledNewsOneItemBody>
          <div>
            <h2>Comments</h2>
            <p>
              <button onClick={refetch}>Refresh comments</button>
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
        </>
      )}
    </StyledNewsOneItemContainer>
  );
};

export default NewsOneItem;
