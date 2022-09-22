import { FC, lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./App.css";
import { Search } from "./components";

import { getPokemon, getPokemonDetails } from "./api/index";
import { setPokemons } from "./actions";

import { getPokemonsWidthDetails } from "./actions/index";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

const List = lazy(() => import("./components/list/List"));

export const App = () => {
	const pokemons: any = useSelector(
		(state: any) => state.data.pokemons,
		shallowEqual
	);
	const dispatch = useDispatch<any>();

	// const [pokemons, setPokemons] = useState([])
	useEffect(() => {
		dispatch(fetchPokemonsWithDetails());
	}, []);

	return (
		<Suspense fallback={<h1>Cargando</h1>}>
			<div className="App">
				<Search />

				<List pokemons={pokemons} />
			</div>
		</Suspense>
	);
};

export default App;
