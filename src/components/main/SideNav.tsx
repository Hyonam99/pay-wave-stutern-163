import React from "react";
import { Link } from "react-router-dom";
import {Hamburger, CustomAvatar} from "components";
import logo from 'assets/images/Logo-short.svg';
import style from "styles/components/main/SideNav.module.scss"

const SideNav = () => {
	return (
		<aside className={style["sidebar"]}>
			<Link to="/">
				<div className={style["logo-area"]}>
					<img src={logo} alt="invoicer logo" />
				</div>
			</Link>
			<div className={style["sidebar-menu"]}>
				<ul>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/invoices">Invoices</Link>
					</li>
					<li>
						<Link to="/customers">Customers</Link>
					</li>
				</ul>
			</div>
			<div className={style["interactive-area"]}>
				<div className={style["avatar-wrapper"]}>
					<CustomAvatar />
				</div>
				<div className={style["mobile-hamburger"]}>
					<Hamburger />
				</div>
			</div>
		</aside>
	);
};

export default SideNav;
