import React from "react";
import { Link } from "react-router-dom";
import {Logo, Hamburger} from "components";
import style from "styles/components/main/NavBar.module.scss";
import { Button } from "@mui/material";

const Navbar = () => {
	const isLoggedIn = false;

	return (
		<nav className={style.navbar}>
			<Link to="/">
				<Logo />
			</Link>
			<div className={style.toggle_Icon}></div>
			<div>
				<div className={!isLoggedIn ? style["mobile-hamburger"] : style["hidden"]}>
					<Hamburger />
				</div>
				<div
					className={isLoggedIn ? style["hidden"] : style["desktop-nav-links"]}
				>
					<NavLinks />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

export const NavLinks = () => {
//   const { auth } = useAuth();
//   const { isLoggedIn } = auth;
  const isLoggedIn = false;

  return (
    <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
      <Button
        // to={isLoggedIn ? 'dashboard' : 'login'}
        // intent={isLoggedIn ? 'outlined-link' : 'primary-link'}
        // size="fixed"
      >
        {isLoggedIn ? 'Dashboard' : 'Log In'}
      </Button>

      {isLoggedIn ? (
        <Button />
      ) : (
        <Button>
          Register
        </Button>
      )}
    </div>
  );
};
