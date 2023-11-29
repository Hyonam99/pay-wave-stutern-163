import React, { useState } from "react";
import { Container, Box, Checkbox, IconButton } from "@mui/material";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import style from "styles/pages/auth.module.scss";
import { login_Schema } from "../../utils/validationSchema";
import { LoginDTO } from "interfaces/Interfaces";
import { useNavigate } from "react-router-dom";
import { useLogin } from "hooks/auth";
import InputAdornment from '@mui/material/InputAdornment';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const navigate = useNavigate()
	const {create, isLoading} = useLogin({
		onSuccess(data: any) {
			localStorage.setItem("paywave-token", data?.data?.token)
			navigate("/dashboard")
		},
		onError(error) {
			console.log(error)
		},
	})

	const initial_Login_Values: LoginDTO = { email: "", password: "" };

	const formik = useFormik<LoginDTO>({
		initialValues: initial_Login_Values,
		validateOnBlur: true,
		validationSchema: login_Schema,
		onSubmit: (values: LoginDTO) => {
			create(values)
		},
	});

	const { handleSubmit, getFieldProps, touched, errors } = formik;

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
  
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

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
							InputProps={{endAdornment: <InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									className={style.toggle_password}
								>
									{showPassword ? <IoMdEyeOff /> : <IoMdEye />}
								</IconButton>
							</InputAdornment>, disableUnderline: true}}
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
					<CustomButton title="Log in" type="submit" isLoading={isLoading} className={style.btn_disabled}/>
				</form>
				<Box className={style.auth_stats}>
					<span>Don&apos;t have an account ?</span>
					<Link to="/register">Create one</Link>
				</Box>
			</Box>
		</Container>
	);
};

export default Login;
