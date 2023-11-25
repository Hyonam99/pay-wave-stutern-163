import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMenuButtonWide } from "react-icons/bs";
import { IconButton, Button, Avatar } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
// import { Avatar, Button, ButtonSignout } from "components";
// import { useAuth, useUser } from "hooks";
import style from "styles/components/builders/Ministyles.module.scss"
import Logo from "./Logo";

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	// const { data: user } = useUser();
	// const {
	// 	auth: { isLoggedIn },
	// } = useAuth();

    const isLoggedIn = true

	return (
		<div className={style["wrapper"]}>
			<IconButton
				id="basic-button"
				aria-controls={isOpen ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={isOpen ? "true" : undefined}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				// className="z-50"
			>
				{isOpen ? 
					<MdOutlineCancel className={style["hamburger-icon"]} size={32}/>
					: <BsMenuButtonWide className={style["hamburger-icon"]} size={28}/>
				}
			</IconButton>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						key="hamburger"
						className={style["hamburger-menu"]}
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
						{isLoggedIn ? (
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
						) : null}
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
									delay: 1,
								},
							}}
						>
							<Button
								onClick={() => setIsOpen((isOpen) => !isOpen)}
								// to={isLoggedIn ? "/dashboard" : "login"}
								// intent={"outlined-link"}
								// size={"fixed"}
							>
								{isLoggedIn ? "Dashboard" : "Log In"}
							</Button>
						</motion.li>
						{isLoggedIn ? (
							<motion.li
								className={style["menu-item"]}
								initial={{ y: 60, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.9 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: "easeInOut",
										delay: 0.9,
									},
								}}
							>
								<Button
									onClick={() => setIsOpen((isOpen) => !isOpen)}
									// to="account"
									// intent={"outlined-link"}
									// size={"fixed"}
								>
									My Account
								</Button>
							</motion.li>
						) : null}
						<motion.li
							className={style["menu-item"]}
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8 }}
							exit={{
								opacity: 0,
								y: 90,
								transition: {
									ease: "easeInOut",
									delay: 0.8,
								},
							}}
						>
							{isLoggedIn ? (
								<Button
									onClick={() => setIsOpen((isOpen) => !isOpen)}
								>
                                    Signout
                                </Button>
							) : (
								<Button
									onClick={() => setIsOpen((isOpen) => !isOpen)}
									// to={"register"}
									// intent={"primary-link"}
									// size={"fixed"}
								>
									Register
								</Button>
							)}
						</motion.li>
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Hamburger;
