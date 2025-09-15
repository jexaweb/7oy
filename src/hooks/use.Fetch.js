import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const req = await fetch(url);

        if (!req.status == 200) throw new Error(req.statusText);
        const data = await req.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, error, isPending };
};
