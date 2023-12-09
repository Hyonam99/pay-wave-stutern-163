import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@mui/material";
import { CgMenuCheese } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { logoutBusiness } from "api/servicesX";
import { AuthContext } from "providers/AuthProvider";
import Logo from "./Logo";
import CustomButton from "./Button";
import { Link } from "react-router-dom";
import style from "styles/components/builders/Ministyles.module.scss";


const Hamburger = () => {
    const {token} = useContext(AuthContext)
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const logOut = () => {
		logoutBusiness()
		window.location.replace("/")
	}

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Create a function to update the window width state
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	// Add an event listener for the window resize event when the component mounts
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		// Cleanup: Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowWidth > 768) {
			setIsMenuOpen(false);
		}
	}, [windowWidth]);

	const list = () => (
		<Box
			sx={{ width: windowWidth < 354 ? "auto" : 260 }}
			role="presentation"
			onClick={() => setIsMenuOpen(false)}
			onKeyDown={() => setIsMenuOpen(false)}
		>
            <AnimatePresence>
				{isMenuOpen && (
					<motion.ul
						key="hamburger"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit={{
							opacity: 0,
							transition: {
								ease: "easeInOut",
								duration: 0.5,
								delay: 1.5,
							},
						}}
					>
						<motion.div>
							<Logo />
						</motion.div>
						{token ? (
							<>
								<motion.li
									className={style["user-info"]}
									initial={{ top: 0, opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1 }}
									exit={{
										opacity: 0,
										transition: {
											ease: "easeInOut",
											duration: 0.5,
											delay: 1,
										},
									}}
								>
									<Avatar />
								</motion.li>
								<motion.li
									className={style["user-info"]}
									initial={{ top: 0, opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: .5 }}
									exit={{
										opacity: 0,
										transition: {
											ease: "easeInOut",
											duration: 0.5,
											delay: 1.6,
										},
									}}
								>
									<Link to="/dashboard" onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
										Dashboard
									</Link>	
								</motion.li>
								<motion.li
									className={style["user-info"]}
									initial={{ top: 0, opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1 }}
									exit={{
										opacity: 0,
										transition: {
											ease: "easeInOut",
											duration: 0.5,
											delay: 1.3,
										},
									}}
								>
									<Link to="/invoices" onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
										Invoices
									</Link>	
								</motion.li>
								<motion.li
									className={style["user-info"]}
									initial={{ top: 0, opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.3 }}
									exit={{
										opacity: 0,
										transition: {
											ease: "easeInOut",
											duration: 0.5,
											delay: 1,
										},
									}}
								>
									<Link to="/customers" onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
										Customers
									</Link>	
								</motion.li>
								<motion.li
									className={style["user-info"]}
									initial={{ top: 0, opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.6 }}
									exit={{
										opacity: 0,
										transition: {
											ease: "easeInOut",
											duration: 0.5,
											delay: .5,
										},
									}}
								>
									<CustomButton
										title="Signout"
										outlined
										onClick={() => {setIsMenuOpen((isOpen) => !isOpen); logOut()}}
									/>
								</motion.li>
							</>
						) : (
							<>
								<motion.li
									className={style["menu-item"]}
									initial={{ y: 60, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: .5 }}
									exit={{
										opacity: 0,
										y: 90,
										transition: {
											ease: "easeInOut",
											delay: 1,
										},
									}}
								>
									<Link to="/login" onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
										Log In
									</Link>								
								</motion.li>
								<motion.li
									className={style["menu-item"]}
									initial={{ y: 60, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 1 }}
									exit={{
										opacity: 0,
										y: 90,
										transition: {
											ease: "easeInOut",
											delay: .5,
										},
									}}
								>
									<Link to="/register" onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
										Register
									</Link>								
								</motion.li>
							</>
						)}
					</motion.ul>
				)}
			</AnimatePresence>
		</Box>
	);

	return (
		<div>
			<Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? (
					<MdOutlineCancel className={style["hamburger-icon-cancel"]} size={32} />
				) : (
					<CgMenuCheese className={style["hamburger-icon"]} size={28} />
				)}
			</Button>
			<Drawer
				anchor={"left"}
				open={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
				transitionDuration={880}
                className={style["hamburger-menu"]}
			>
				{list()}
			</Drawer>
		</div>
	);
};

export default Hamburger;
