import React from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import style from "styles/pages/customer.module.scss"
import { EmptyContent } from "components";

const Customer = () => {

	return (
		<AuthLayout>

			<motion.main
				className={style.customer_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<EmptyContent />
			</motion.main>
		</AuthLayout>
	);
};

export default Customer;

const pageVariants = {
	hidden: {
		opacity: 0,
		x: "-100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			mass: 3.5,
			damping: 30,
			delay: 0.4,
		},
	},
	exit: {
		opacity: 0,
		x: "-100vw",
		transition: {
			duration: 0.4,
		},
	},
};
