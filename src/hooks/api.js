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


export function useAuthFetch(url, initialState, token) {
  const [data, setData] = useState(initialState);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if(!token) {
          // If not token, do not send the fetch
          // just exit the function
          console.log("No token in useAuthFetch");
          return;
        }
        setLoading(true);
        const response = await fetch(url, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
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
  }, [ url, token ]);

  return [fetchError, loading, data];
}
