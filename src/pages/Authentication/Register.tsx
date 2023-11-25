import React from "react";
import { Container, Box } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import style from "styles/pages/auth.module.scss";
import { signup_Schema } from "./validationSchema";
import { SignupDTO } from "interfaces/Interfaces";
import { useNavigate } from "react-router-dom";

const Register = () => {

	const navigate = useNavigate()

	const initial_Signup_Values: SignupDTO = {
		firstName: "",
		lastName: "",
		email: "",
		businessName: "",
		businessAddress: "",
		phoneNumber: "",
		password: "",
	};

	const formik = useFormik<SignupDTO>({
		initialValues: initial_Signup_Values,
		validateOnBlur: true,
		validationSchema: signup_Schema,
		onSubmit: (values: SignupDTO) => {
			console.log(values);
			navigate("/dashboard")
		},
	});

	const { handleSubmit, getFieldProps, touched, errors } = formik;

	return (
		<Container className={style["registration-section"]}>
			<Box>
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

				<form onSubmit={handleSubmit} className={style["registration-form"]}>
					<Box className={style["registration-form_wrapper_inputs"]}>

						<InputField
							id="firstName"
							type="text"
							label="First name"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter first name"
							error={errors.firstName !== undefined && touched.firstName === true}
							helperText={
								errors.firstName !== undefined && touched.firstName === true
									? errors.firstName : ""
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
									? errors.lastName : ""
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
									? errors.email : ""
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
							error={errors.businessName !== undefined && touched.businessName === true}
							helperText={
								errors.businessName !== undefined && touched.businessName === true
									? errors.businessName : ""
							}
							{...getFieldProps("businessName")}
						/>

						<InputField
							id="businessAddress"
							type="text"
							label="Business address"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter business address"
							error={errors.businessAddress !== undefined && touched.businessAddress === true}
							helperText={
								errors.businessAddress !== undefined && touched.businessAddress === true
									? errors.businessAddress : ""
							}
							{...getFieldProps("businessAddress")}
						/>

						<InputField
							id="phoneNumber"
							type="text"
							label="Phone number"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter phone number"
							error={errors.phoneNumber !== undefined && touched.phoneNumber === true}
							helperText={
								errors.phoneNumber !== undefined && touched.phoneNumber === true
									? errors.phoneNumber : ""
							}
							{...getFieldProps("phoneNumber")}
						/>

						<InputField
							id="password"
							type="password"
							label="Password"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter unique password"
							error={errors.password !== undefined && touched.password === true}
							helperText={
								errors.password !== undefined && touched.password === true
									? errors.password : ""
							}
							{...getFieldProps("password")}
						/>

					</Box>
					<CustomButton title="Create" type="submit" isLoading={false} />
				</form>
			</Box>
		</Container>
	);
};

export default Register;