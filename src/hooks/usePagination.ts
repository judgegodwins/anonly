import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { PaginatedResponse } from "types/responses";

export default function <DataType>(
  serviceAction: (
    page: number,
    limit: number
  ) => Promise<AxiosResponse<PaginatedResponse<DataType[]>>>,
  page: number,
  limit: number
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);

    setTimeout(() => {
      serviceAction(page, limit)
      .then(({ data: resData }) => {
        setData((prev) => [...new Set<DataType>([...prev, ...resData.data])]);
        setHasMore(Boolean(resData.next));
        setLoading(false);
      })
      .catch((e) => setError(true));
    }, 5000);
  }, [page, limit]);

  return { loading, error, data, hasMore };
}
