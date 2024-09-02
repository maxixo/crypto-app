export const fetchTrending = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-LkCTiWUTchgywENzy4GhQ4Vb',
        },
    };

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending', options);
        return await response.json();
    } catch (error) {
        console.error('Error fetching trending coins:', error);
        throw error;
    }
};
