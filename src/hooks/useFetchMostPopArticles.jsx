import { useState, useEffect } from 'react';
import { fetchMostPopularArticles } from '../services/api';

const useFetchMostPopArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchMostPopularArticles();
                console.log(data, 'data')
                setArticles(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getArticles();
    }, []);

    return { articles, loading, error };
};

export default useFetchMostPopArticles;