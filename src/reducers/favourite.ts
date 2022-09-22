import { SET_FAVORITE } from "../actions/Types";

const initialState = {
	pokemons: [],
};

const favourite = (state: any = initialState, action: any) => {
	switch (action.type) {
		case SET_FAVORITE:
			const newPokemonsList: any = [...state.pokemons];
			const currentPokemonIndex = newPokemonsList.findIndex((pokemon: any) => {
				return pokemon.id === action.payload.pokemonId;
			});
			if (currentPokemonIndex < 0) {
				return state;
			}

			newPokemonsList[currentPokemonIndex].favorite =
				!newPokemonsList[currentPokemonIndex].favorite;

			return { ...state, pokemons: newPokemonsList };

		default:
			return state;
	}
};

export default favourite;
