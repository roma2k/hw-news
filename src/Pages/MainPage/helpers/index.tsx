import { useInView } from "react-intersection-observer";
import { mainApi } from "../../../api";
import { useEffect } from "react";

export const ShortItemWrapper: React.FC<{ id: number }> = ({ id }) => {
  const [getItem, { isLoading: oneLoading, isFetching, data: item }] =
    mainApi.useLazyGetItemQuery();
  const { ref, inView, } = useInView({
    delay: 100,
    threshold: 0,
  });
  useEffect(() => {
    inView && getItem(id, true);
  }, [inView]);

  return (
    <span ref={ref}>
      {oneLoading || isFetching ? <>loading...</> : item?.title}
    </span>
  );
};
