import React from "react";
import style from "styles/pages/Landingpage.module.scss";
import BlankLayout from "layouts/BlankLayout";

const LandingPage = () => {

	return (
		<BlankLayout>
			<div className={style.container} data-testid="hero-container">
				<h1 className={style["main-title"]}>
					Create<span className={style["accent-text"]}> & </span>Receive
				</h1>
				<p className={style["description-text"]} data-testid="hero-description">
					Simplify your invoicing journey, and effortlessly manage your
					Customers with{" "}
					<span className={style["bold-accent-text"]}>Pay wave</span>.
				</p>
			</div>
		</BlankLayout>
	);
};

export default LandingPage;
