//es una funcion que retorna otra funcion curring fiuntion
// interface Props {
//     store: any,
//     next: any,
//     action: any
// }

// export const logger = (store: any) => (next: any) => (action: any) => {
// 	console.log(action);
// 	next(action);
// };

export const logger = (store: any) => {
	// store de la aplicación
	return (next: any) => {
		// next es una función que se llama cuando el middleware termina su trabajo y envía el action al reducer
		return (action: any) => {
			// action es la información que se pasa al reducer
			console.log(action);
			next(action); // <-- hace que el action llegue al reducer
		};
	};
};

// export const featuring = (store: any) => {
// 	return (next: any) => {
// 		return (actionNew: any) => {
// 			// debugger;
// 			const featured = [
// 				{ name: "Julian", url: "https://ab.c" }, // <-- nuevo pokemon que quiero meter al state
// 				...actionNew.payload, // <-- desestructura todos los pokemons que están en el payload de 'action'
// 			];
// 			const updatedAction = {
// 				...actionNew,
// 				payload: [...featured],
// 			};
// 			next(updatedAction);
// 		};
// 	};
// };

// export const featuring = (store: any) => (next: any) => (actionInfo: any) => {
// 	const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
// 	const updatedActionInfo = {
// 		...actionInfo,
// 		action: { ...actionInfo.action, payload: featured },
// 	};
// 	next(updatedActionInfo);
// };
