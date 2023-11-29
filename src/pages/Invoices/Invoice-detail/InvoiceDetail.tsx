import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "providers/AuthProvider";
import { useGeneratePaymentLink, useGetInvoice } from "hooks/business";
import { useGetAllCustomers } from "hooks/customer";
import { convertTimestamp, formatCurrency } from "utils/helpers";
import { motion } from "framer-motion";
import AuthLayout from "layouts/AuthLayout";
import { pageVariants } from "utils/pageVariant";
import { CustomerInfoType, GenerateLinkResponse } from "interfaces/Types";
import { CustomButton, Status } from "components";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import copy from "clipboard-copy";
import style from "styles/components/main/InvoiceHeader.module.scss";


const InvoiceDetail = () => {
	const { token } = useContext(AuthContext);
	const { id } = useParams();
	const { data } = useGetInvoice(Number(id), token as string);
	const getCustomers = useGetAllCustomers(token as string);
	const findCustomer = getCustomers?.data?.find(
		(customer: CustomerInfoType) => customer?.id == data?.invoice?.customerId
	);
	const [paymentLink, setPaymentLink] = useState({ show: false, link: "" });
	const [isCopied, setIsCopied] = useState(false);

	const { generateLink, isLoading, isError } = useGeneratePaymentLink(
		{
			onSuccess(data: GenerateLinkResponse) {
				console.log(data.data.data.authorization_url);
				setPaymentLink({ show: true, link: data.data.data.authorization_url });
			},
			onError(error) {
				console.log("error", error);
			},
		},
		token as string,
		Number(id)
	);

	const generate_Link_DTO = {
		payerEmail: findCustomer?.email as string,
		amount: parseInt(data?.invoice?.totalAmount as string),
	};

	const handleCopyClick = async (textToCopy: string) => {
		try {
			await copy(textToCopy);
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 3000);
		} catch (error) {
			console.error("Error copying to clipboard:", error);
		}
	};

	return (
		<AuthLayout>
			<motion.div
				className={style.invoice_page}
				variants={pageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{!data ? (
					<div>...loading</div>
				) : (
					<div className={style["invoice-detail-card"]}>
						<div className={style["invoice-id-info"]}>
							<h1>
								<strong>#</strong>
								{id}
							</h1>
							<span>
								<Status status={data?.invoice?.paymentStatus?.toLowerCase()} />
							</span>
						</div>
						<div className={style["invoice-main-info"]}>
							<div className={style["main-client-info"]}>
								<div className={style["sub-info"]}>
									<span>Bill to</span>
									<strong>{findCustomer?.name}</strong>
								</div>
								<div className={style["sub-info"]}>
									<span>Sent to</span>
									<strong>{findCustomer?.email}</strong>
								</div>
							</div>
							<div className={style["invoice-dates"]}>
								<div className={style["date-sub-info"]}>
									<span>Issued:</span>
									<strong>{convertTimestamp(data?.invoice?.createdAt)}</strong>
								</div>
								<div className={style["date-sub-info"]}>
									<span>Due:</span>
									<strong>
										{convertTimestamp(data?.invoice?.paymentDueDate)}
									</strong>
								</div>
							</div>
						</div>
						<div style={{marginBottom: ".5rem"}}>
							<span>Total Amount:</span>
							<strong>
								₦{" "}
								{formatCurrency(parseInt(data?.invoice?.totalAmount as string) / 100)}
							</strong>
						</div>
						{data?.invoice?.paymentStatus?.toLowerCase() !== "paid" && (
							<CustomButton
								title="Generate payment link"
								isLoading={isLoading && !isError}
								onClick={() => {
									generateLink(generate_Link_DTO);
								}}
							/>
						)}

						{paymentLink.show && (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: ".4rem",
									flexWrap: "wrap",
									marginTop: ".5rem"
								}}
							>
								<span>{paymentLink.link.substring(0, 24)}</span>
								<button
									onClick={() => {
										handleCopyClick(paymentLink.link);
									}}
									style={{background: "none", border: "0", color: "#00a4d6"}}
								>
									{isCopied ? <FaCheck /> : <MdContentCopy />}{" "}
									{isCopied ? "copied" : "copy"}
								</button>
							</div>
						)}
					</div>
				)}
			</motion.div>
		</AuthLayout>
	);
};

export default InvoiceDetail;
