import React, { useState } from "react";
import { Container, Box, Alert, AlertColor, IconButton } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import style from "styles/pages/auth.module.scss";
import { motion } from "framer-motion";
import { signup_Schema } from "../../utils/validationSchema";
import { SignupDTO } from "interfaces/Interfaces";
import { Link } from "react-router-dom";
import { useSignup } from "hooks/auth";
import InputAdornment from "@mui/material/InputAdornment";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Register = () => {
	const { create, isLoading } = useSignup({
		onSuccess(data: any) {
			localStorage.setItem("paywave-token", data?.data?.token)
			setIsShown(true)
			reset_Api_Alert();
		},
		onError(error) {
			setApiAlert({
				open: true,
				intent: "error",
				message: error?.response?.data?.error,
			});
		},
	});

	const initial_Signup_Values: SignupDTO = {
		firstName: "",
		lastName: "",
		email: "",
		businessName: "",
		phoneNumber: "",
		password: "",
	};

	const formik = useFormik<SignupDTO>({
		initialValues: initial_Signup_Values,
		validateOnBlur: true,
		validationSchema: signup_Schema,
		onSubmit: (values: SignupDTO) => {
			create(values);
		},
	});

	const { handleSubmit, getFieldProps, touched, errors } = formik;

	const [apiAlert, setApiAlert] = useState({
		open: false,
		intent: "",
		message: "",
	});

	const reset_Api_Alert = () => {
		setTimeout(() => {
			setApiAlert({ open: false, intent: "", message: "" });
		}, 4000);
	};

	const [isShown, setIsShown] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const handleClose = () => {
		setIsShown(false);
	};

	const handleProceed = () => {
		window.location.href = "/profile"
	}

	return (
		<Container className={style["registration-section"]} data-testid="registration-page-container">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ ease: "easeOut", duration: 1 }}		
			>
				<div
					style={{
						textAlign: "center",
						fontSize: "24px",
						fontWeight: "semibold",
						marginBottom: "11px",
					}}
				>
					Create Account
				</div>

				<div
					style={{
						textAlign: "center",
						fontSize: "14px",
						fontWeight: "semibold",
						marginBottom: "11px",
					}}
				>
					All input values should be valid, not generic or sample values
				</div>

				{apiAlert.open && (
					<Alert severity={apiAlert.intent as AlertColor}>
						{apiAlert.message}
					</Alert>
				)}

				<form onSubmit={handleSubmit} className={style["registration-form"]} data-testid="registration-page-form">
					<Box className={style["registration-form_wrapper_inputs"]} data-testid="registration-form-wrapper">
						<InputField
							id="firstName"
							type="text"
							label="First name"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter first name"
							error={
								errors.firstName !== undefined && touched.firstName === true
							}
							helperText={
								errors.firstName !== undefined && touched.firstName === true
									? errors.firstName
									: ""
							}
							{...getFieldProps("firstName")}
						/>

						<InputField
							id="lastName"
							type="text"
							label="Last name"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter last name"
							error={errors.lastName !== undefined && touched.lastName === true}
							helperText={
								errors.lastName !== undefined && touched.lastName === true
									? errors.lastName
									: ""
							}
							{...getFieldProps("lastName")}
						/>

						<InputField
							id="email"
							type="email"
							label="Email adddress"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter email address"
							error={errors.email !== undefined && touched.email === true}
							helperText={
								errors.email !== undefined && touched.email === true
									? errors.email
									: ""
							}
							{...getFieldProps("email")}
						/>

						<InputField
							id="businessName"
							type="text"
							label="Business name"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter business name"
							error={
								errors.businessName !== undefined &&
								touched.businessName === true
							}
							helperText={
								errors.businessName !== undefined &&
								touched.businessName === true
									? errors.businessName
									: ""
							}
							{...getFieldProps("businessName")}
						/>

						<InputField
							id="phoneNumber"
							type="text"
							label="Phone number"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter phone number"
							error={
								errors.phoneNumber !== undefined && touched.phoneNumber === true
							}
							helperText={
								errors.phoneNumber !== undefined && touched.phoneNumber === true
									? errors.phoneNumber
									: ""
							}
							{...getFieldProps("phoneNumber")}
						/>

						<InputField
							id="password"
							type={showPassword ? "text" : "password"}
							label="Password"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter unique password"
							error={errors.password !== undefined && touched.password === true}
							helperText={
								errors.password !== undefined && touched.password === true
									? errors.password
									: ""
							}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
											className={style.toggle_password}
											data-testid="toggle-password-btn"
										>
											{showPassword ? <IoMdEyeOff title="toggle-closed"/> : <IoMdEye title="toggle-open"/>}
										</IconButton>
									</InputAdornment>
								),
								disableUnderline: true,
							}}
							{...getFieldProps("password")}
						/>
					</Box>
					<CustomButton
						title="Create"
						type="submit"
						isLoading={isLoading}
						className={style.btn_disabled}
					/>
				</form>
				<Box className={style.auth_stats}>
					<span>Already have an account ?</span>
					<Link to="/login">Log In</Link>
				</Box>
			</motion.div>

			<Dialog
				open={isShown}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					To proceed, you need to update your full business details.
					Click &quot;proceed&quot; below to continue
				</DialogContent>
				<Box className={style.proceed_link}>
					<CustomButton title="Proceed" onClick={handleProceed}/>
				</Box>
			</Dialog>
		</Container>
	);
};

export default Register;
