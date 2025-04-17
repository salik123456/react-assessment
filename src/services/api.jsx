export const fetchMostPopularArticles = async (period = 1) => {
    const apiKey = import.meta.env.VITE_NYT_API_KEY;
 
    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        throw error;
    }
};