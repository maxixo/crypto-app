// //  export default function handler(req, res) {
//     const getData = async () =>  {

//         const myHeaders = new Headers();
//         myHeaders.append("X-CMC_PRO_API_KEY", "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c");

//         const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow"
//         };



//         const response = await fetch("https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/trending/latest?start=1&time_period=24h&limit=10", requestOptions)
//             .then((response) => response.text())
//             .then((result) => console.log(result))
//             .catch((error) => console.error(error));
                
    
//       getData()
    
    
//  }

// const data = getData();

//  console.log(data);