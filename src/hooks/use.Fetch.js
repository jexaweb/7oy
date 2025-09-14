import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const req = await fetch(url);
        if (!req.ok) throw new Error(req.statusText);
        const data = await req.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };

    getData();
  }, [url]);

  return { data, isPending, error };
}
