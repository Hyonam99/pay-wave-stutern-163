import React, { ReactNode } from "react";
import { Footer, Navbar } from "components";
import style from "styles/layouts/layout.module.scss";

const BlankLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={style.container}>
			<Navbar />
			<main className={style["main-content"]}>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default BlankLayout;
