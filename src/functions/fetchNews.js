export const fetchNews = async () => {
    const url = 'https://news-api14.p.rapidapi.com/v2/trendings?topic=Cryptocurrency&language=EN';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8d33050fd0msh4dcea863ee1a539p1f68c6jsn135609f1ff27',
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
