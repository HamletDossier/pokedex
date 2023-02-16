import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PokeApi = createApi({
    reducerPath: "PokeApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
    endpoints: (builder) => ({
        // Get all Pokemons
        getPokemons: builder.query({query: () => '/pokemon/',}),

    })
})

export const { useGetPokemonsQuery }:any = PokeApi;