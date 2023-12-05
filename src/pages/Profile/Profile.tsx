import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { pageVariants } from "utils/pageVariant";
import {Tabs, Tab, Box} from "@mui/material";
import style from "styles/pages/profile.module.scss";
import { AccountForm, ProfileForm } from "components";

function tabIdProps(index: number) {
	return {
		id: `profile-tab-${index}`,
		"aria-controls": `profile-tabpanel-${index}`,
	};
}

const Profile = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<AuthLayout>
		<motion.div
			className={style.profile_page}
			variants={pageVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Business" {...tabIdProps(0)} />
						<Tab label="Account" {...tabIdProps(1)} />
					</Tabs>
				</Box>
				{value === 0 && (
					<ProfileForm />
					
					)}
				{value === 1 && (
					<Box>
						<AccountForm />
					</Box>

				)}
			</Box>
		</motion.div>
	</AuthLayout>
	);
}

export default Profile
