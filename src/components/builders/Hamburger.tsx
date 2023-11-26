import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMenuButtonWide } from "react-icons/bs";
import { IconButton, Avatar } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import style from "styles/components/builders/Ministyles.module.scss"
import Logo from "./Logo";
import CustomButton from "./Button";
import { Link } from "react-router-dom";
import { logoutBusiness } from "api/services";
import { AuthContext } from "providers/AuthProvider";

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {token} = useContext(AuthContext)

	const logOut = () => {
		logoutBusiness()
		window.location.replace("/")
	}

	return (
		<div className={style["wrapper"]}>
			<IconButton
				id="basic-button"
				aria-controls={isOpen ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={isOpen ? "true" : undefined}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
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
									<Link to="/dashboard" onClick={() => setIsOpen((isOpen) => !isOpen)}>
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
									<Link to="/invoices" onClick={() => setIsOpen((isOpen) => !isOpen)}>
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
									<Link to="/customers" onClick={() => setIsOpen((isOpen) => !isOpen)}>
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
										onClick={() => {setIsOpen((isOpen) => !isOpen); logOut()}}
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
									<Link to="/login" onClick={() => setIsOpen((isOpen) => !isOpen)}>
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
									<Link to="/register" onClick={() => setIsOpen((isOpen) => !isOpen)}>
										Register
									</Link>								
								</motion.li>
							</>
						)}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Hamburger;
