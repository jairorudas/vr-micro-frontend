import { useState, useEffect } from 'react';

const fetchData = async (url: string, path: string) => {
  try {
    const response = await fetch(`${url}/${path}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export function useFetchEventsHeader() {
  const [allHeaderEvents, setAllEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_API_STATIC;
    fetchData(url, 'headerEvents.json')
      .then((fetchedData) => {
        setAllEvents(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { allHeaderEvents, loading, error };
}

export function useFetchEventsProducts() {
  const [allProductEvents, setPRoductAllEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_API_STATIC;
    fetchData(url, 'productEvents.json')
      .then((fetchedData) => {
        setPRoductAllEvents(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { allProductEvents, loading, error };
}
