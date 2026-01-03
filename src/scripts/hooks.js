import { useEffect, useState } from "react";

export function useFetchURL(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    try {
      fetchData();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error };
}
