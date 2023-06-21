import axios from 'axios'

export const restAPI = axios.create({
    baseURL: 'https://localhost:7205/Marketplace'
})

export const getMarketPlacesPage = async (pageParam = 1, options = {},sellerId) => {
    const response = await restAPI.get(`/${sellerId}/GetMarketplaces?page=${pageParam}&ItemsPerPage=10`, options)
    return response.data
}