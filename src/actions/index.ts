import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_POKEMONS } from "./Types";

export const setPokemons = (payload: any) => ({
	type: SET_POKEMONS,
	payload,
});

export const setFavorite = (payload: any) => ({
	type: SET_FAVORITE,
	payload,
});

export const getPokemonsWidthDetails =
	(pokemons = []) =>
	async (dispatch: any) => {
		const pokemonsDetailed = await Promise.all(
			pokemons.map((pokemon) => getPokemonDetails(pokemon))
		);

		dispatch(setPokemons(pokemonsDetailed));
	};


