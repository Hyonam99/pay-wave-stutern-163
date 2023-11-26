import React from "react";
import { motion } from "framer-motion";
import { InvoiceHeader, InvoiceList } from "components";
import AuthLayout from "layouts/AuthLayout";
import style from "styles/components/main/InvoiceHeader.module.scss"

const Invoices = () => {

	return (
		<AuthLayout>

			<motion.div
				className={style.invoice_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<InvoiceHeader />
				<InvoiceList />			
			</motion.div>
		</AuthLayout>
	);
};

export default Invoices;

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
