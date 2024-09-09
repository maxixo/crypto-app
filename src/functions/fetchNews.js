export const fetchNews = async () => {
    const url = 'https://news-api14.p.rapidapi.com/v2/trendings?topic=Cryptocurrency&language=EN';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2c1748817cmshc2d4d4e34af7f55p1d15b2jsnfd06713e92e4',
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
