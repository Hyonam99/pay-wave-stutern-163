import React from "react";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import style from "styles/components/main/CreateInvoice.module.scss";
import { CreateInvoiceDto } from "interfaces/Interfaces";
import { invoice_Schema } from "utils/validationSchema";
import { Checkbox, Box, Button } from "@mui/material";

const CreateInvoice = () => {
	const initial_Invoice_Values: CreateInvoiceDto = {
		customerName: "",
		customerEmail: "",
		items: [{ name: "", description: "", price: 0, quantity: 0 }],
	};

	const formik = useFormik<CreateInvoiceDto>({
		initialValues: initial_Invoice_Values,
		validateOnBlur: true,
		validationSchema: invoice_Schema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const [checked, setChecked] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const {
		handleSubmit,
		getFieldProps,
		touched,
		errors,
		values,
		setFieldValue,
	} = formik;
	const handleRemove = (i: number) => {
		const updatedItems = [...values.items];
		updatedItems.splice(i, 1);
		setFieldValue("items", updatedItems);
	};

	const handleInsert = () => {
		const updatedItems = [...values.items];
		updatedItems.push({
			description: "",
			name: "",
			price: 0,
			quantity: 0,
		});
		formik.setFieldValue("items", updatedItems);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				className={style["form"]}
			>
				<InputField
					id="customerName"
					type="text"
					label="Customer name"
					variant="filled"
					size="small"
					margin="none"
					placeholder="enter customer name"
					error={
						errors.customerName !== undefined && touched.customerName === true
					}
					helperText={
						errors.customerName !== undefined && touched.customerName === true
							? errors.customerName
							: ""
					}
					{...getFieldProps("customerName")}
					className={style["test-input"]}
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
						errors.customerEmail !== undefined && touched.customerEmail === true
					}
					helperText={
						errors.customerEmail !== undefined && touched.customerEmail === true
							? errors.customerEmail
							: ""
					}
					{...getFieldProps("customerEmail")}
					className={style["test-input"]}
				/>
				<Box
					style={{
						display: "flex",
						alignItems: "center",
						justifyItems: "flex-start",
						width: "90%",
					}}
				>
					<Checkbox
						checked={checked}
						onChange={handleChange}
						inputProps={{ "aria-label": "controlled" }}
					/>
					Save as customer
				</Box>
				{formik.values.items.map((item, i) => (
					<div key={i + 1} className={style["item-wrapper"]}>
						<InputField
							id="item"
							label="name"
							type="text"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter item name"
							error={
								errors.items?.[i] !== undefined &&
								touched.items?.[i].name
							}
							{...getFieldProps(`items.${i}.name`)}
							className={style["item"]}
						/>
						<InputField
							id="item"
							label="description"
							type="text"
							variant="filled"
							size="small"
							margin="none"
							placeholder="enter item description"
							error={
								errors.items?.[i] !== undefined &&
								touched.items?.[i].description
							}
							{...getFieldProps(`items.${i}.description`)}
							className={style["item"]}
						/>
						<Box className={style["item-wrapper-account"]}>
							<InputField
								id="item"
								label="price"
								type="text"
								variant="filled"
								size="small"
								margin="none"
								placeholder="price"
								error={
									errors.items?.[i] !== undefined &&
									touched.items?.[i].price
								}
								{...getFieldProps(`items.${i}.price`)}
								className={style["item-digit"]}
							/>
							<InputField
								id="item"
								label="quantity"
								type="text"
								variant="filled"
								size="small"
								margin="none"
								placeholder="enter quantity"
								error={
									errors.items?.[i] !== undefined &&
									touched.items?.[i].description
								}
								{...getFieldProps(`items.${i}.quantity`)}
								className={style["item-digit"]}
							/>
							<Button onClick={() => handleRemove(i)}>-</Button>
						</Box>
					</div>
				))}
				<CustomButton
					title="+ add new item"
					type="button"
					isLoading={false}
					onClick={() => handleInsert()}
					outlined
				/>
				<CustomButton title="Create" type="submit" isLoading={false} />
			</form>
		</>
	);
};

export default CreateInvoice;
