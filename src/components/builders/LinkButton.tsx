import React from "react";
import { Link } from "react-router-dom";
import style from "styles/components/builders/Ministyles.module.scss";

const LinkButton = ({
	to,
	title,
	className,
	outlined,
}: {
	to: string;
	title: string;
	className?: string;
	outlined?: boolean;
}) => {
	return (
		<Link
			to={to}
			className={
				className
					? className
					: `${outlined ? style.link_outlined : style.link_Button}`
			}
		>
			{title}
		</Link>
	);
};

export default LinkButton;
