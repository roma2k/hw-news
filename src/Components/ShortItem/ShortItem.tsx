import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { mainApi } from "../../api";

const ShortItem: React.FC<{ id: number }> = ({ id }) => {
  const [getItem, { isLoading: oneLoading, isFetching, data: item }] =
    mainApi.useLazyGetItemQuery();
  const { ref, inView } = useInView({
    delay: 100,
    threshold: 0,
  });
  useEffect(() => {
    inView && getItem(id, true);
  }, [inView, getItem, id]);

  return (
    <span ref={ref}>
      {oneLoading || isFetching ? <>loading...</> : item?.title}
    </span>
  );
};

export default ShortItem