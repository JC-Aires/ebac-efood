import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RestaurantType } from '../pages/Home'
import { MenuItemsType } from '../pages/Perfil'
import { MenuType } from '../pages/Perfil'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => '/restaurantes'
    }),
    getMenu: builder.query<MenuItemsType[], string>({
      query: (id) => `/restaurantes/${id}`,
      transformResponse: (response: RestaurantType) => {
        return response.cardapio
      }
    }),
    getRestaurantId: builder.query<MenuType, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetMenuQuery,
  useGetRestaurantIdQuery
} = api

export default api
