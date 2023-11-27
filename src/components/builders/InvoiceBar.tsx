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
			<div className={style["invoice-container"]}>
				<div className={style["mobile-version"]}>
					<div className={style["about"]}>
						<h2 className={style["id"]}>
							<span>#</span>
							{id}
						</h2>
						<span className={style["receiver"]}>Due: {convertTimestamp(paymentDueDate as string)}</span>
						<span><FaRegEye /></span>
					</div>
					<div className={style["information"]}>
							<span className={style["date"]}>Issued: {convertTimestamp(createdAt as string)}</span>
							<h3 className={style["amount"]}>₦ {formatCurrency(parseInt(totalAmount as string))}</h3>
							<Status status={paymentStatus?.toLowerCase() as string} />
					</div>
				</div>
				<div className={style["desktop-version"]}>
						<h2 className={style["id"]}>
							<span>#</span>
							{id}
						</h2>
						<span className={style["date"]}>Issued: {convertTimestamp(createdAt as string)}</span>
						<span className={style["receiver"]}>Due: {convertTimestamp(paymentDueDate as string)}</span>
						<h3 className={style["amount"]}>₦ {formatCurrency(parseInt(totalAmount as string))}</h3>
                    <span><Status status={paymentStatus?.toLowerCase() as string} /></span>
					<span><FaRegEye /></span>
				</div>
			</div>
		</Link>
	);
};

export default InvoiceBar

