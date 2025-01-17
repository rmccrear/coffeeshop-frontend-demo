import { useState, useEffect } from "react";

export function useFetch(url, initialState) {
  const [data, setData] = useState(initialState);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          console.log("fetch failed with " + response.status);
          setFetchError(true);
        }
        else {
          const productData = await response.json();
          setData(productData);
        }
      } catch (error) {
        console.log(error);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [ url ]);

  return [fetchError, loading, data];
}