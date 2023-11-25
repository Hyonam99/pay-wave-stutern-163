import React from "react";
import { Container, Box, Checkbox } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import style from "styles/pages/auth.module.scss";
import { login_Schema } from "./validationSchema";
import { LoginDTO } from "interfaces/Interfaces";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

	const initial_Login_Values: LoginDTO = { email: "", password: "" };

	const formik = useFormik<LoginDTO>({
		initialValues: initial_Login_Values,
		validateOnBlur: true,
		validationSchema: login_Schema,
		onSubmit: (values: LoginDTO) => {
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
						fontSize: "26px",
						fontWeight: "semibold",
						marginBottom: "11px",
					}}
				>
					Login
				</div>

				<form onSubmit={handleSubmit} className={style["login-form"]}>
					<Box className={style["login-form_wrapper_inputs"]}>
						<InputField
							id="email"
							label="Email Address"
							type="email"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter your email"
							error={errors.email !== undefined && touched.email === true}
							helperText={
								errors.email !== undefined && touched.email === true
									? errors.email
									: ""
							}
							{...getFieldProps("email")}
						/>
						<InputField
							id="password"
							label="Password"
							type="password"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter your password"
							error={errors.password !== undefined && touched.password === true}
							helperText={
								errors.password !== undefined && touched.password === true
									? errors.password
									: ""
							}
							{...getFieldProps("password")}
						/>
					</Box>
					<Box className={style["login-form_acknowledgement"]}>
						<Box display="flex" alignItems="center" gap=".6rem">
							<Checkbox />
							<span>Remember me</span>
						</Box>
						<Link to="#" className={style["fgp-link"]}>
							Forgot Password ?
						</Link>
					</Box>
					<CustomButton title="Log in" type="submit" isLoading={false} />
				</form>
			</Box>
		</Container>
	);
};

export default Login;