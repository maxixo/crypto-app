export const fetchAllCoin = async (currency) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-LkCTiWUTchgywENzy4GhQ4Vb',
        },
    };

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
        const data = await response.json();
        return data.slice(0, 6); // Limit to 6 coins
    } catch (error) {
        console.error('Error fetching all coins:', error);
        throw error;
    }
};
