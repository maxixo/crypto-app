export const fetchNews = async () => {
    const url = 'https://news-api14.p.rapidapi.com/v2/trendings?topic=Cryptocurrency&language=EN';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fba2c0d095mshb32ae2011c9d9ffp1c2764jsne56fe36e1774',
            'x-rapidapi-host': 'news-api14.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};
