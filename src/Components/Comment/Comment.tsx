import React, { useEffect, useState } from "react";
import { mainApi } from "../../api";
import styled from "styled-components";

const StyledCommentBody = styled.div<{cursor: string}>`
  min-height: 100px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 0 12px;
  background: #f5e2c6;

  cursor: ${({cursor}) => cursor};

  .comments-bottom {
    display: flex;
    gap: 20px;
  }
`;

const Comment: React.FC<{ id: number; parentFetching: boolean }> = ({
  id,
  parentFetching,
}) => {
  const [kids, setKids] = useState(false);

  const {
    data: item,
    refetch: getItem,
    isFetching,
  } = mainApi.useGetItemQuery(id, {});

  useEffect(() => {
    parentFetching && getItem();
  }, [parentFetching, getItem]);

  return (
    <StyledCommentBody onClick={() => item?.kids && setKids(true)} cursor={item?.kids?.length ? 'pointer' : 'default'}>
      <p>{item?.text}</p>
      <div className="comments-bottom">
        <div>
          <p>
            <small>Replies: {item?.kids?.length ?? "0"}</small>
          </p>
        </div>
      </div>
      <div style={{ marginLeft: 50 }}>
        {item?.kids && (
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
        )}

        <div></div>
      </div>
    </StyledCommentBody>
  );
};

export default Comment;
