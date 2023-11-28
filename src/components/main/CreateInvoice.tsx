import React, { useContext, useState } from "react";
import { CustomButton, InputField } from "components";
import { useFormik } from "formik";
import { CreateInvoiceDto } from "interfaces/Interfaces";
import { invoice_Schema } from "utils/validationSchema";
import { Box, Button, TextField, Alert, AlertColor } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import Autocomplete from "@mui/material/Autocomplete";
import { AuthContext } from "providers/AuthProvider";
import { useCreateInvoice, useGetAllCustomers } from "hooks/customer";
import { CustomerInfoType, serviceResponse } from "interfaces/Types";
import style from "styles/components/main/CreateInvoice.module.scss";

const CreateInvoice = ({onClose} : {onClose: () => void}) => {
	const { token } = useContext(AuthContext);
	const { data } = useGetAllCustomers(token as string);
	const [userId, setUserId] = useState(0);

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

	const { createInvoice, isLoading } = useCreateInvoice(
		{
			onSuccess: (data: serviceResponse) => {
				setApiAlert({
					open: data.success,
					intent: "success",
					message: data.message,
				});
				reset_Api_Alert();
				window.location.reload();
				onClose()
			},
			onError: (error: any) => {
				setApiAlert({
					open: true,
					intent: "error",
					message: error?.response?.data?.error,
				});
				reset_Api_Alert();
			},
		},
		userId,
		token as string
	);

	const initial_Invoice_Values: CreateInvoiceDto = {
		items: [{ name: "", description: "", price: 0, quantity: 0 }],
	};

	const formik = useFormik<CreateInvoiceDto>({
		initialValues: initial_Invoice_Values,
		validateOnBlur: true,
		validationSchema: invoice_Schema,
		onSubmit: (values) => {
			const updatedItems = values.items.map((item) => {return {
				...item,
				price: item.price * 100
			}})
			createInvoice(updatedItems);
			console.log(updatedItems)
		},
	});

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

	const autoComplete_Options =
		data?.map((customer_Info: CustomerInfoType) => {
			return { label: customer_Info.name, id: customer_Info.id };
		}) ?? [];

	const [value, setValue] = useState<string | null>("");
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			{apiAlert.open && (
				<Alert severity={apiAlert.intent as AlertColor}>
					{apiAlert.message}
				</Alert>
			)}
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				className={style["form"]}
			>
				<Autocomplete
					value={value}
					onChange={(e: any, newValue: any) => {
						setValue(newValue);
						setUserId(newValue.id);
					}}
					inputValue={inputValue}
					onInputChange={(e, newInputValue) => {
						setInputValue(newInputValue);
					}}
					id="auto-compelete"
					options={autoComplete_Options}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label="select customer..." />
					)}
					className={style["text-input"]}
				/>
				{formik.values.items.map((item, i) => (
					<div key={i + 1} className={style["item-wrapper"]}>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="flex-end"
							width="100%"
						>
							<Button onClick={() => handleRemove(i)}>
								<MdOutlineCancel size={18} color="red" />
							</Button>
						</Box>
						<Box className={style["item-wrapper-account"]}>
							<InputField
								id="item"
								label="name"
								type="text"
								variant="filled"
								size="small"
								margin="none"
								placeholder="enter item name"
								error={
									errors.items?.[i] !== undefined && touched.items?.[i]?.name
								}
								{...getFieldProps(`items.${i}.name`)}
								className={style["item-name"]}
							/>
							<Box>
								<InputField
									id="item"
									label="price"
									type="number"
									variant="filled"
									size="small"
									margin="none"
									placeholder="price"
									error={
										errors.items?.[i] !== undefined && touched.items?.[i]?.price
									}
									{...getFieldProps(`items.${i}.price`)}
									className={style["item-digit"]}
								/>
								<InputField
									id="item"
									label="quantity"
									type="number"
									variant="filled"
									size="small"
									margin="none"
									placeholder="enter quantity"
									error={
										errors.items?.[i] !== undefined &&
										touched.items?.[i]?.quantity
									}
									{...getFieldProps(`items.${i}.quantity`)}
									className={style["item-digit"]}
								/>
							</Box>
						</Box>
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
								touched.items?.[i]?.description
							}
							{...getFieldProps(`items.${i}.description`)}
							className={style["item"]}
						/>
					</div>
				))}
				<CustomButton
					title="+ add new item"
					type="button"
					isLoading={false}
					onClick={() => handleInsert()}
					outlined
				/>
				<CustomButton title="Create" type="submit" isLoading={isLoading} />
			</form>
		</>
	);
};

export default CreateInvoice;
