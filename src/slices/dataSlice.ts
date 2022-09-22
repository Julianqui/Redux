import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FC } from "react";
import { getPokemon, getPokemonDetails } from "../api";

const initialState = {
	pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
	"data/fetchPokemonWithDetails",
	async (_, { dispatch }) => {
		//fetch

		const pokemonsRes = await getPokemon();
		const pokemonsDetailed = await Promise.all(
			pokemonsRes.map((pokemon: any) => getPokemonDetails(pokemon))
		);

		dispatch(setPokemons(pokemonsDetailed));
	}
);

export const dataSlice: any = createSlice({
	name: "data",
	initialState,
	reducers: {
		setPokemons: (state: any, action: any) => {
			state.pokemons = action?.payload;
		},
		setFavorite: (state: any, action) => {
			const currentPokemonIndex: any = state?.pokemons?.findIndex(
				(pokemon: any) => {
					return pokemon?.id === action?.payload?.pokemonId;
				}
			);
			if (currentPokemonIndex > 0) {
				const isFavorite: any = state?.pokemons[currentPokemonIndex]?.favorite;

				state.pokemons[currentPokemonIndex].favorite = !isFavorite;
			}
		},
	},
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducers;
