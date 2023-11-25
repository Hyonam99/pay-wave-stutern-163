import React from "react";
import { CustomFilter } from "components";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import style from "styles/components/main/InvoiceHeader.module.scss"

const InvoiceHeader = () => {
	const invoices: string[] = [];
	const filter_Key: string[] = ["All", "draft", "pending", "paid"];

	return (
		<section className={style["container"]}>
			<div>
				<h2 className={style["title"]}>Invoices</h2>
				<span className={style["count"]}>
					You have a total of {invoices.length} invoices
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
			<Button variant="contained" startIcon={<FaPlus />} size="small">
				New Invoice
			</Button>
		</section>
	);
};

export default InvoiceHeader;
