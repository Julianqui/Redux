import { FC } from "react";
import { ButtonSC } from "./Button.styled";

interface Props {
	isFavorite?: any;
	onClick?: any;
    title?: string;
}

export const Button: FC<Props> = ({ isFavorite, onClick, title }) => {
	const Icon = isFavorite ?  '' : ''

	return (
		<div>
			<ButtonSC onClick={onClick}>{title}</ButtonSC>
		</div>
	);
};

export default Button;
