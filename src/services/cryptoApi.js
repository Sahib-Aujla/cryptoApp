import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeader={
    'X-RapidAPI-Key': 'be2e2096abmshccd08b3863254e6p1fa897jsnccc888c6938d',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';   

const createRequest =(url) => ({ url , headers:cryptoApiHeader})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })

        
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'be2e2096abmshccd08b3863254e6p1fa897jsnccc888c6938d',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };