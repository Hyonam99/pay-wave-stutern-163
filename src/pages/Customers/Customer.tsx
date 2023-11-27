import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { CustomButton, CustomerList, InputField } from "components";
import { pageVariants } from "utils/pageVariant";
import { useCreateCustomer } from "hooks/customer";
import { AuthContext } from "providers/AuthProvider";
import { serviceResponse } from "interfaces/Types";
import { Button, Box, Alert, AlertColor } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { useFormik } from "formik";
import { CreateCustomerDto } from "interfaces/Interfaces";
import { customer_Schema } from "utils/validationSchema";
import { MdOutlineCancel } from "react-icons/md";
import style from "styles/pages/customer.module.scss";

const Customer = () => {
	const { token } = useContext(AuthContext);
	const [apiAlert, setApiAlert] = useState({
		open: false,
		intent: "",
		message: "",
	});

	const reset_Api_Alert = () => {
		setTimeout(() => {
			setApiAlert({ open: false, intent: "", message: "" });
		}, 4000)
	}
	const { createCustomer, isLoading, isError } = useCreateCustomer(
		{
			onSuccess: (data: serviceResponse) => {
				setApiAlert({
					open: data.success,
					intent: "success",
					message: data.message,
				});
				reset_Api_Alert()
				window.location.reload()
				handleClose()
			},
			onError: (error: any) => {
				setApiAlert({
					open: true,
					intent: "error",
					message: error?.response?.data?.error,
				});
				reset_Api_Alert()
			},
		},
		token as string
	);

	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const initial_Customer_Values: CreateCustomerDto = {
		customerName: "",
		customerEmail: "",
	};

	const formik = useFormik<CreateCustomerDto>({
		initialValues: initial_Customer_Values,
		validateOnBlur: true,
		validationSchema: customer_Schema,
		onSubmit: (values) => {
			createCustomer(values);
		},
	});

	const { handleSubmit, getFieldProps, touched, errors } = formik;

	return (
		<AuthLayout>
			<motion.main
				className={style.customer_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Box className={style["customer-page-header"]}>
					<h3>Customer base</h3>
					<Button
						variant="contained"
						startIcon={<FaPlus />}
						size="small"
						onClick={handleClickOpen}
					>
						New Customer
					</Button>
				</Box>
				<CustomerList />
				<>
					<Dialog
						open={open}
						onClose={handleClose}
						fullWidth={true}
						maxWidth={"md"}
					>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="flex-end"
							width="100%"
						>
							<Button onClick={() => handleClose()}>
								<MdOutlineCancel size={28} color="grey" />
							</Button>
						</Box>
						{apiAlert.open && (
							<Alert severity={apiAlert.intent as AlertColor}>
								{apiAlert.message}
							</Alert>
						)}
						<form onSubmit={handleSubmit} className={style["form"]}>
							<InputField
								id="customerName"
								type="text"
								label="Customer name"
								variant="filled"
								size="small"
								margin="none"
								placeholder="enter customer name"
								error={
									errors.customerName !== undefined &&
									touched.customerName === true
								}
								helperText={
									errors.customerName !== undefined &&
									touched.customerName === true
										? errors.customerName
										: ""
								}
								{...getFieldProps("customerName")}
								className={style["text-input"]}
							/>
							<InputField
								id="email"
								label="Customer Email"
								type="email"
								variant="filled"
								size="small"
								margin="none"
								placeholder="enter customer email"
								error={
									errors.customerEmail !== undefined &&
									touched.customerEmail === true
								}
								helperText={
									errors.customerEmail !== undefined &&
									touched.customerEmail === true
										? errors.customerEmail
										: ""
								}
								{...getFieldProps("customerEmail")}
								className={style["text-input"]}
							/>
							<CustomButton
								title="Create"
								type="submit"
								isLoading={isLoading && !isError}
							/>
						</form>
					</Dialog>
				</>
			</motion.main>
		</AuthLayout>
	);
};

export default Customer;
