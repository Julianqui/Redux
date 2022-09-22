import { useDispatch } from "react-redux";
import { FC } from "react";
import { Button } from "../button";
import { CardSC } from "./Card.styled";
import { setFavorite } from "../../actions/index";

interface Props {
	name?: string;
	image: any;
	types: any;
	favorite?: any;
	id: any;
}

export const Card: FC<Props> = ({ name, image, types, favorite, id }) => {
	const typesString = types?.map((elem: any) => elem?.type?.name).join(", ");
	const dispatch = useDispatch();

	

	const handleOnFavorite = () => {
		dispatch(setFavorite({ pokemonId: id }));
	};

	return (
		<CardSC>
			{name}
			<img src={image} alt={name} />
			<p>{typesString}</p>
			<Button isFavorite={favorite} title="Favorito" onClick={handleOnFavorite}/>
		</CardSC>
	);
};

export default Card;
