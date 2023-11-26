import InvoiceBar from "components/builders/InvoiceBar";
import React from "react";
import { random_Invoices } from "assets/mocked-data/constants";

const InvoiceList = () => {

	const rand_InvoiceList = random_Invoices()

	return (
		<div>
			{rand_InvoiceList.map((invoice, i) => {
				return (
					<InvoiceBar
						key={i + 1}
						id={invoice.id}
						client={invoice.client}
						amount={invoice.amount}
						status={i % 2 == 0 ? "paid" : "pending"}
						creationDate="22/11/2023"
					/>
				);
			})}
		</div>
	);
};

export default InvoiceList;
