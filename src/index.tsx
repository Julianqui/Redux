import React from "react";
import ReactDOM from "react-dom/client";
import { pokemonsReducers } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
	legacy_createStore as createStore,
	compose,
	applyMiddleware,
} from "redux";
import "./index.css";
import { logger } from "./middlewares";
import App from "./App";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);


const composeEnhancers = compose(
	applyMiddleware(thunk, logger),
	(window as any).__REDUX_DEVTOOLS_EXTENSION__
		? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
		: compose
);

const store = createStore(rootReducer, composeEnhancers);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
