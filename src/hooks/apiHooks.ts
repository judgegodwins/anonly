import axios, { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import {
  PaginatedResponse,
  SuccessDataResponse,
  SuccessResponse,
} from "types/responses";
import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";
import { getAccessToken } from "helpers/authHelpers";
import {
  apiErrorParser,
  commonSuccessRespFilter,
} from "helpers/responseHelpers";
import { useProvideNotification } from "contexts/notificationContext";

const axiosHttp = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosHttp.interceptors.request.use(function (config) {
  return {  
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  };
});

export function usePagination<DataType>(
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

    serviceAction(page, limit)
      .then(({ data: resData }) => {
        setData((prev) => [...new Set<DataType>([...prev, ...resData.data])]);
        setHasMore(Boolean(resData.next));
        setLoading(false);
      })
      .catch((e) => setError(true));
  }, [page, limit]);

  return { loading, error, data, hasMore };
}

interface UsePostProps<TReturnType, TData, TShape extends ObjectShape> {
  url: string;
  initialValues: TData;
  schema: ObjectSchema<TShape>;
  type?: 'post' | 'patch';
  notify?: boolean;
  onComplete?: (data: TReturnType) => any;
}

export function usePost<TReturnType, TData, TShape extends ObjectShape>(
  options: UsePostProps<TReturnType, TData, TShape>,
) {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TReturnType>();
  const [message, setMessage] = useState<string>();

  const { notify } = useProvideNotification();

  const formik = useFormik<TData>({
    initialValues: options.initialValues,
    validationSchema: options.schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      axiosHttp[options.type || 'post']<SuccessDataResponse<TReturnType>>(options.url, values)
        .then(commonSuccessRespFilter)
        .then(({ data: resData }) => {
          setData(resData.data);
          setMessage(resData.message);
          setSubmitting(false);
          resetForm();
          if (options.onComplete) options.onComplete(resData.data);
          if (options.notify) notify(resData.message);
        })
        .catch(apiErrorParser)
        .catch((e: Error) => {
          setError(e.message);
          notify(e);
          setSubmitting(false);
        });
    },
  });

  return {
    data,
    error,
    formik,
  };
}
