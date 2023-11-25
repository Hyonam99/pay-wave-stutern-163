import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";

const Profile = () => {
	const [isEmpty, setIsEmpty] = useState(false);
	const invoices: string[] = [];

	useEffect(() => {
		setIsEmpty(invoices.length === 0);
	}, [invoices]);

	return (
		<AuthLayout>

			<motion.div
				style={{
					maxWidth: "73rem",
					margin: "3rem auto",
					padding: "0 24px",
					minHeight: "89vh",
					...(window.innerWidth >= 760 && { marginTop: "2rem" }),
					...(window.innerWidth < 760 && { marginTop: "3rem" }),
					...(window.innerWidth >= 1000 && { marginTop: "4rem", padding: 0 }),
				}}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{isEmpty ? <span>EmptyPage Profile Component</span>: <span>InvoicesList component</span>}
			</motion.div>
		</AuthLayout>
	);
};

export default Profile;

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
