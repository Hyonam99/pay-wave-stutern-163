import React from "react";
import { CreateInvoice, CustomFilter } from "components";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import style from "styles/components/main/InvoiceHeader.module.scss";

const InvoiceHeader = () => {

	const filter_Key: string[] = ["All", "draft", "pending", "paid"];
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<section className={style["container"]}>
			<div>
				<h2 className={style["title"]}>Invoices</h2>
				<span className={style["count"]}>
					All invoices
				</span>
			</div>
			<div className={style["left-area"]}>
				<div>
					<CustomFilter
						displayData={filter_Key}
						setValueChange={(e) => {
							console.log(e);
						}}
					/>
				</div>
			</div>
			<Button variant="contained" startIcon={<FaPlus />} size="small" onClick={handleClickOpen}>
				New Invoice
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth={true}
				maxWidth={"md"}
			>
				<CreateInvoice />
			</Dialog>
		</section>
	);
};

export default InvoiceHeader;
