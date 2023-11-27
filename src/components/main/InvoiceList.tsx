import React, {useContext} from "react";
import { AuthContext } from "providers/AuthProvider";
import { useGetAllInvoice } from "hooks/business";
import { InvoiceDetailsType } from "interfaces/Types";
import {EmptyContent, InvoiceBar} from "components";

const InvoiceList = () => {
	const { token } = useContext(AuthContext);
	const { data, isLoading } = useGetAllInvoice(token as string);

	return (
		<div>
			{(!data && !isLoading) && <EmptyContent />}
			{data?.map((invoice: InvoiceDetailsType, i: number) => {
				return (
					<InvoiceBar
						key={i + 1}
						id={invoice.id}
						customerId={invoice.customerId}
						totalAmount={invoice.totalAmount}
						paymentStatus={invoice.paymentStatus}
						createdAt={invoice.createdAt}
						paymentDueDate={invoice.paymentDueDate}
						{...invoice}
					/>
				);
			})}
		</div>
	);
};

export default InvoiceList;
