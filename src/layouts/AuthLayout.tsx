import { SideNav } from "components";
import React, { ReactNode, useContext } from "react";
import { AnimatePresence } from 'framer-motion'
import { AuthContext } from "providers/AuthProvider";
import style from "styles/layouts/layout.module.scss";

const AuthLayout = ({ children }: { children: ReactNode }) => {
	const {token} = useContext(AuthContext)
	if (!token) {
		window.location.replace("/")
	}
	return (
		<div className={style.auth_container}>
			<SideNav />
			<AnimatePresence>
				<main className={style.auth_main_content}>
					{token && children}
				</main>
			</AnimatePresence>
		</div>
	);
};

export default AuthLayout;
