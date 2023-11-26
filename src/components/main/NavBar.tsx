import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Logo, Hamburger, CustomButton } from "components";
import { AuthContext } from "providers/AuthProvider";
import style from "styles/components/main/NavBar.module.scss";

const Navbar = () => {

	return (
		<nav className={style.navbar}>
			<Link to="/">
				<Logo />
			</Link>
			<div className={style.toggle_Icon}></div>
			<div>
				<div
					className={style["mobile-hamburger"]}
				>
					<Hamburger />
				</div>
				<div
					className={style["desktop-nav-links"]}
				>
					<NavLinks />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

export const NavLinks = () => {
	const {token} = useContext(AuthContext)

	return (
		<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
			<Link to={token ? "/dashboard" : "/login"}>
				<CustomButton title={token ? "Dashboard" : "Log In"} />
			</Link>

			{!token && (
				<Link to="/register">
					<CustomButton title="Register" outlined={true}/>
				</Link>
			)}
		</div>
	);
};
