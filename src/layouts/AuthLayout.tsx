import { SideNav } from "components";
import React, { ReactNode } from "react";
import { AnimatePresence } from 'framer-motion'
import style from "styles/layouts/layout.module.scss";

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={style.auth_container}>
			<SideNav />
			<AnimatePresence>
				<main className={style.auth_main_content}>
					{children}
				</main>
			</AnimatePresence>
		</div>
	);
};

export default AuthLayout;
