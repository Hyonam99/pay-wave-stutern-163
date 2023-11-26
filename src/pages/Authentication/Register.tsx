import React from "react";
import { Container, Box } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import style from "styles/pages/auth.module.scss";
import { signup_Schema } from "../../utils/validationSchema";
import { SignupDTO } from "interfaces/Interfaces";
import { Link, useNavigate } from "react-router-dom";
import {useSignup} from "hooks/auth";

const Register = () => {

	const navigate = useNavigate()
	const {create, isLoading} = useSignup({
		onSuccess(data: any) {
			console.log(data)
			navigate("/login")
		},
		onError(error) {
			console.log(error)
		},
	})

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
			create(values)
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
					<CustomButton title="Create" type="submit" isLoading={isLoading} />
				</form>
				<Box display="flex" alignItems="center" gap=".6rem">
						<span>already have an account ?</span>
						<Link to="/login">Log In</Link>
				</Box>
			</Box>
		</Container>
	);
};

export default Register;
