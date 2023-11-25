// Home.js
import React from "react";
import style from "styles/pages/Landingpage.module.scss";
import BlankLayout from "layouts/BlankLayout";
import { Button } from "@mui/material";
// import { useOutletContext } from 'react-router-dom';
// import { Button } from 'components';

const LandingPage = () => {
	// const { isLoggedIn } = useOutletContext<{ isLoggedIn: boolean }>();
	const isLoggedIn = false

	return (
		<BlankLayout>
			<div className={style.container}>
				<h1 className={style["main-title"]}>
					Create<span className={style["accent-text"]}>.</span>Store
					<span className={style["accent-text"]}>.</span>Edit
					<span className={style["accent-text"]}>.</span>
				</h1>
				<p className={style["description-text"]}>
					Simplify your invoicing journey, effortlessly store and manage your
					Invoices and take control of your finances with{" "}
					<span className={style["bold-accent-text"]}>Pay wave</span>.
				</p>
				<Button>
					{isLoggedIn ? 'Dashboard' : 'Get Started'}
				</Button>
			</div>
		</BlankLayout>
	);
};

export default LandingPage;
