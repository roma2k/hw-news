import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { mainApi } from "../../api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledShortItemContainer = styled.div<{ opacity: string }>`
  min-height: 30px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 0 12px;
  background: #f5e2c6;
  opacity: ${({ opacity }) => opacity};
  transition: 0.5s ease;

  .comments-bottom {
    display: flex;
    gap: 20px;
  }
`;

const ShortItem: React.FC<{ id: number }> = ({ id }) => {
  const [getItem, { data: item, isSuccess }] = mainApi.useLazyGetItemQuery();
  const { ref, inView } = useInView({
    delay: 100,
    threshold: 1,
    triggerOnce: true,
  });

  const navigate = useNavigate();
  useEffect(() => {
    inView && getItem(id, true);
  }, [inView, getItem, id]);

  return (
    <StyledShortItemContainer
      ref={ref}
      onClick={() => navigate(`/item/${id}`)}
      style={{ cursor: "pointer" }}
      opacity={isSuccess || inView ? "1" : "0"}
    >
      <h3>{item?.title}</h3>
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
              {(item?.time && new Date(item?.time * 1000).toDateString()) ||
                "n/a"}
            </small>
          </p>
        </div>
      </div>
    </StyledShortItemContainer>
  );
};

export default ShortItem;
