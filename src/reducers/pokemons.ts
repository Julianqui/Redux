import { SET_FAVORITE, SET_POKEMONS } from "../actions/Types";

const initialState = {
	pokemons: [],
};

export const pokemonsReducers = (state: any = initialState, action: any) => {
	switch (action.type) {
		case SET_POKEMONS:
			return { ...state, pokemons: action.payload };
		// return state.setIn(state, [pokemons], fromJS(action.payload));

		default:
			return state;
	}
};
