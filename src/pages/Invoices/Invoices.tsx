import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InvoiceHeader } from "components";
import AuthLayout from "layouts/AuthLayout";
import style from "styles/components/main/InvoiceHeader.module.scss"

const Invoices = () => {
	const [isEmpty, setIsEmpty] = useState(false);
	const invoices: string[] = [];

	useEffect(() => {
		setIsEmpty(invoices.length === 0);
	}, [invoices]);

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
				{isEmpty ? <span>EmptyPage invoice Component</span>: <span>InvoicesList component</span>}
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
