import React from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { DashboardHeader, EmptyContent } from "components";
import { pageVariants } from "utils/pageVariant";
import style from "styles/components/main/Dashboardheader.module.scss"

const Dashboard = () => {

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
