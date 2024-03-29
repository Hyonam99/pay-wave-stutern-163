import React from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { Status } from "components";
import { convertTimestamp, formatCurrency } from "utils/helpers";
import { InvoiceDetailsType } from "interfaces/Types";
import style from "styles/components/main/Invoicelist.module.scss"

const InvoiceBar = (props: InvoiceDetailsType) => {
	const { id, totalAmount, paymentStatus, createdAt, paymentDueDate } = props;

	return (
		<Link to={`/invoice/${id}`}>
			<div className={style["invoice-container"]} data-testid="invoice-bar-container">
				<div className={style["mobile-version"]} data-testid="invoice-bar-mobile">
					<div className={style["about"]}>
						<h2 className={style["id"]}>
							<span>#</span>
							{id}
						</h2>
						<span className={style["date"]}>Issued: {convertTimestamp(createdAt as string)}</span>
						<span><FaRegEye color="#00a4d6"/></span>
					</div>
					<div className={style["information"]} data-testid="invoice-information">
							<span className={`${style["receiver"]} ${style["info-item"]}`}>Due: {convertTimestamp(paymentDueDate as string)}</span>
							<h3 className={`${style["amount"]} ${style["info-item"]}`}>₦ {formatCurrency(parseInt(totalAmount as string) / 100)}</h3>
							<Status status={paymentStatus?.toLowerCase() as string} />
					</div>
				</div>
				<div className={style["desktop-version"]} data-testid="invoice-bar-desktop">
						<h2 className={style["id"]}>
							<span>#</span>
							{id}
						</h2>
						<span className={style["date"]} data-testid="invoice-date">Issued: {convertTimestamp(createdAt as string)}</span>
						<span className={style["receiver"]}>Due: {convertTimestamp(paymentDueDate as string)}</span>
						<h3 className={style["amount"]} data-testid="invoice-amount">₦ {formatCurrency(parseInt(totalAmount as string) / 100)}</h3>
                    <span><Status status={paymentStatus?.toLowerCase() as string} /></span>
					<span><FaRegEye color="#00a4d6"/></span>
				</div>
			</div>
		</Link>
	);
};

export default InvoiceBar

