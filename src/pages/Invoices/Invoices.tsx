import React from "react";
import { motion } from "framer-motion";
import { InvoiceHeader, InvoiceList } from "components";
import AuthLayout from "layouts/AuthLayout";
import { pageVariants } from "utils/pageVariant";
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
