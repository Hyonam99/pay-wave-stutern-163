import React, { useContext, useState } from "react";
import { serviceResponse } from "interfaces/Types";
import { Box, Alert, AlertColor } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import { AuthContext } from "providers/AuthProvider";
import { useGetBusinessData, useUpdateAccountDetails } from "hooks/business";
import { AccountUpdateDTO } from "interfaces/Interfaces";
import style from "styles/pages/profile.module.scss";
import { account_Schema } from "utils/validationSchema";

const AccountForm = () => {
	const { token } = useContext(AuthContext);
	const { data } = useGetBusinessData((token as string) ?? "");

	const [apiAlert, setApiAlert] = useState({
		open: false,
		intent: "",
		message: "",
	});

	const { updateAccount, isLoading, isError } = useUpdateAccountDetails(
		{
			onSuccess: (data: serviceResponse) => {
				console.log(data);
				setApiAlert({
					open: data.success,
					intent: "success",
					message: data.message,
				});
				reset_Api_Alert();
			},
			onError: (error: any) => {
				setApiAlert({
					open: true,
					intent: "error",
					message: error?.response?.data?.error,
				});
			},
		},
		token as string
	);

	const reset_Api_Alert = () => {
		setTimeout(() => {
			setApiAlert({ open: false, intent: "", message: "" });
		}, 4000);
	};

	const initial_Account_Values: AccountUpdateDTO = {
		accountName: data?.accountName ?? "",
		accountNumber: data?.accountNumber ?? "",
		bankCode: data?.bankCode ?? "",
	};

	const formik = useFormik<AccountUpdateDTO>({
		initialValues: initial_Account_Values,
		validationSchema: account_Schema,
		validateOnBlur: true,
		enableReinitialize: true,
		onSubmit: (values) => {
			updateAccount(values);
		},
	});

	const { handleSubmit, getFieldProps } = formik;

	return (
		<Box>
			{apiAlert.open && (
				<Alert severity={apiAlert.intent as AlertColor}>
					{apiAlert.message}
				</Alert>
			)}
			<form onSubmit={handleSubmit} className={style["business-update-form"]}>
				<Box
					display="flex"
					alignItems={"center"}
					justifyItems={"flex-start"}
					width={"90%"}
				>
					Account Details
				</Box>
				<InputField
					id="accountName"
					type="text"
					label="Account name"
					variant="filled"
					size="small"
					margin="none"
					placeholder="enter account name"
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
				<InputField
					id="bankCode"
					type="text"
					label="Bank code"
					variant="filled"
					size="small"
					margin="none"
					placeholder="enter bank code"
					error={false}
					helperText=""
					{...getFieldProps("bankCode")}
					className={style["text-input"]}
				/>
				<CustomButton
					title="Update"
					type="submit"
					isLoading={isLoading && !isError}
				/>
			</form>
		</Box>
	);
};

export default AccountForm;
