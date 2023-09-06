import { useState, useEffect } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setReponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);

  const refetch = () => setReload((prev) => !prev);
  useEffect(() => {
    // const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          // signal: controller.signal,
        });
        // console.log(res);

        setReponse(res.data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    // useEffect cleanup function
    // return () => controller.abort()
  }, [reload]);

  return { response, error, loading ,refetch};
};

export default useAxios;
