const axios = require('axios');

async function getGasPrice() {
    try {
        const response = await axios.get('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YOUR_API_KEY');
        const { low, average, high } = response.data.result;
        console.log(`Current gas prices:
    Low: ${low} Gwei
    Average: ${average} Gwei
    High: ${high} Gwei`);
    } catch (error) {
        console.error('Error fetching gas prices:', error);
    }
}

getGasPrice();