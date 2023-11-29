/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import { Button, CircularProgress } from "@mui/material";
import style from "styles/components/builders/Ministyles.module.scss";
import { CustomButtonProps } from "interfaces/Interfaces";

const CustomButton = (props: CustomButtonProps): React.JSX.Element => {
	const { title, size, outlined, onClick, color, className, type, isLoading } = props;

	return (
		<Button
			variant={outlined === true ? "outlined" : "contained"}
			color={color}
			size={size}
			type={type}
			disabled={isLoading}
			onClick={onClick}
			className={`${style.custom_button} ${className}`}
		>
			{isLoading ? <CircularProgress color="inherit" size={24}/> : title}
		</Button>
	);
};

export default CustomButton;
