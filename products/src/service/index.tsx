import { useState, useEffect } from 'react';

// Função auxiliar para buscar dados
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

// Hook para buscar produtos
export function useProducts() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = import.meta.env.VITE_API_URL;
		fetchData(url, 'products')
			.then((fetchedData) => {
				setData(fetchedData.products);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setError(err);
				setLoading(false);
			});
	}, []);

	return { data, loading, error };
}

export function useFetchEventsProducts() {
	const [allEvents, setAllEvents] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = import.meta.env.VITE_API_STATIC;
		fetchData(url, 'productEvents.json')
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

	return { allEvents, loading, error };
}
