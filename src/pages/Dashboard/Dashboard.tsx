import React from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { DashboardHeader, EmptyContent } from "components";
import style from "styles/components/main/Dashboardheader.module.scss"
import { useGetBusinessData } from "hooks/auth";

const Dashboard = () => {
	const {data, isError, isLoading, isSuccess} = useGetBusinessData()
	console.log({data, isError, isLoading, isSuccess})

	return (
		<AuthLayout>

			<motion.div
				className={style.dashboard_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<DashboardHeader />
				<EmptyContent />
			</motion.div>
		</AuthLayout>
	);
};

export default Dashboard;

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
