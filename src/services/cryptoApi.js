import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeader={
     'x-cg-demo-api-key': 'CG-LkCTiWUTchgywENzy4GhQ4Vb',
     accept: 'application/json',
   
    
    
    // 'X-RapidAPI-Host': 'sandbox-api.coinmarketcap.com'  
  }

  const baseUrl='api.coingecko.com/api/v3'

  const createRequest = (url) =>({url, headers:cryptoApiHeader})

  
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptoList: builder.query({
        query: () =>createRequest(`/search/trending`)
      }),

    })
})

export const {useGetCryptoListQuery} = cryptoApi
//v1/cryptocurrency/trending/gainers-losers?start=1&time_period=24h&sort=percent_change_24h&limit=10"

//v1/cryptocurrency/trending/latest?start=1&time_period=24h&limit=10