import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { pageVariants } from "utils/pageVariant";
import { serviceResponse } from "interfaces/Types";
import { Box, Alert, AlertColor } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import { AuthContext } from "providers/AuthProvider";
import { useGetBusinessData, useUpdateBusinessInfo } from "hooks/business";
import { BusinessInfoType } from "interfaces/Types";
import style from "styles/pages/profile.module.scss";

const Profile = () => {
	const { token } = useContext(AuthContext);
	const { data } = useGetBusinessData(token as string);
	const [apiAlert, setApiAlert] = useState({
		open: false,
		intent: "",
		message: "",
	});

	const {updateBusinessInfo, isLoading, isError} = useUpdateBusinessInfo(
		{
			onSuccess: (data: serviceResponse) => {
				setApiAlert({
					open: data.success,
					intent: "success",
					message: data.message,
				});
				reset_Api_Alert()
				window.location.reload()
			},
			onError: (error: any) => {
				setApiAlert({
					open: true,
					intent: "error",
					message: error?.response?.data?.error,
				});
				reset_Api_Alert()
			},
		}, token as string
	)

	const reset_Api_Alert = () => {
		setTimeout(() => {
			setApiAlert({ open: false, intent: "", message: "" });
		}, 4000);
	};

	const initial_Customer_Values: BusinessInfoType = {
		businessName: data?.businessName,
		email: data?.email,
		phoneNumber: data?.phoneNumber ?? "",
		accountName: data?.accountName ?? "",
		accountNumber: data?.accountNumber ?? "",
		city: data?.city ?? "",
		country: data?.country ?? "",
		streetAddress: data?.streetAddress ?? "",
	};

	const formik = useFormik<BusinessInfoType>({
		initialValues: initial_Customer_Values,
		validateOnBlur: true,
		enableReinitialize: true,
		onSubmit: (values) => {
			updateBusinessInfo(values);
		},
	});

	const { handleSubmit, getFieldProps } = formik;

	return (
		<AuthLayout>
			<motion.div
				className={style.profile_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Box>
					{apiAlert.open && (
						<Alert severity={apiAlert.intent as AlertColor}>
							{apiAlert.message}
						</Alert>
					)}
					<form
						onSubmit={handleSubmit}
						className={style["business-update-form"]}
					>
						<Box display="flex" alignItems={"center"} justifyItems={"flex-start"} width={"90%"}>
							Business Details
						</Box>
						<InputField
							id="businessName"
							type="text"
							label="Business name"
							variant="filled"
							size="small"
							margin="none"
							placeholder=""
							error={false}
							helperText=""
							disabled
							{...getFieldProps("businessName")}
							className={style["text-input"]}
						/>
						<InputField
							id="customerName"
							type="email"
							label="Business email address"
							variant="filled"
							size="small"
							margin="none"
							placeholder=""
							error={false}
							helperText=""
							disabled
							{...getFieldProps("email")}
							className={style["text-input"]}
						/>
						<InputField
							id="phoneNumber"
							type="text"
							label="Phone number"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter phone number"
							error={false}
							helperText=""
							{...getFieldProps("phoneNumber")}
							className={style["text-input"]}
						/>
						<Box display="flex" alignItems={"center"} justifyItems={"flex-start"} width={"90%"}>Account Details</Box>
						<InputField
							id="accountName"
							type="text"
							label="Account name"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter bank account name"
							error={false}
							helperText=""
							{...getFieldProps("accountName")}
							className={style["text-input"]}
						/>
						<InputField
							id="accountNumber"
							type="text"
							label="Account number"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter account number"
							error={false}
							helperText=""
							{...getFieldProps("accountNumber")}
							className={style["text-input"]}
						/>
						<Box display="flex" alignItems={"center"} justifyItems={"flex-start"} width={"90%"}>Contact Details</Box>
						<InputField
							id="city"
							type="text"
							label="City"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter city name"
							error={false}
							helperText=""
							{...getFieldProps("city")}
							className={style["text-input"]}
						/>
						<InputField
							id="country"
							type="text"
							label="Country name"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter country name"
							error={false}
							helperText=""
							{...getFieldProps("country")}
							className={style["text-input"]}
						/>
						<InputField
							id="streetAddress"
							type="text"
							label="Street address"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter street address"
							error={false}
							helperText=""
							{...getFieldProps("streetAddress")}
							className={style["text-input"]}
						/>
						<CustomButton title="Update" type="submit" isLoading={isLoading && !isError} />
					</form>
				</Box>
			</motion.div>
		</AuthLayout>
	);
};

export default Profile;
