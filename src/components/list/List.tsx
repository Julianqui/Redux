import { FC } from "react";
import { Card } from "../../components";

interface Props {
	pokemons?: any;
}

export const List: FC<Props> = ({ pokemons }) => {
	console.log(pokemons);
	return (
		<div>
			{pokemons.map((pokemon: any) => {
				return (
					<Card
						name={pokemon.name}
						key={pokemon.name}
						image={pokemon?.sprites?.back_default}
						types={pokemon?.types}
						favorite={pokemon.favorite}
						id={pokemon.id}
					/>
				);
			})}
		</div>
	);
};

List.defaultProps = {
	pokemons: Array(10).fill(""),
};

export default List;
