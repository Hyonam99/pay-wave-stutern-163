import React from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import style from "styles/components/main/Invoicelist.module.scss"
import { Status } from "components";

interface InvoiceProps {
	id: string;
	client: string;
	creationDate: string;
	amount: number;
	status: string;
}

const InvoiceBar = (props: InvoiceProps) => {
	const { id, client, creationDate, amount, status } = props;

	return (
		<Link to={`/invoice/${id}`}>
			<div className={style["invoice-container"]}>
				<div className={style["mobile-version"]}>
					<div className={style["about"]}>
						<h2 className={style["id"]}>
							<span>#</span>
							{id}
						</h2>
						<span className={style["receiver"]}>{client}</span>
						<span><FaRegEye /></span>
					</div>
					<div className={style["information"]}>
						<div>
							<span className={style["date"]}>{creationDate}</span>
							<h3 className={style["amount"]}>$ {amount}</h3>
						</div>
						<Status status={status} />
					</div>
				</div>
				<div className={style["desktop-version"]}>
						<h2 className={style["id"]}>
							<span>#</span>
							{id}
						</h2>
						<span className={style["date"]}>{creationDate}</span>
						<span className={style["receiver"]}>{client}</span>
						<h3 className={style["amount"]}>$ {amount}</h3>
                    <span><Status status={status} /></span>
					<span><FaRegEye /></span>
				</div>
			</div>
		</Link>
	);
};

export default InvoiceBar

