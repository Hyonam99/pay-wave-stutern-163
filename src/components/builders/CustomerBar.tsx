import React from "react";
// import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import style from "styles/components/main/CustomerList.module.scss"
import { convertTimestamp } from "utils/helpers";

interface CustomerProps {
	id: number;
	email: string;
	client: string;
	creationDate: string;
}

const CustomerBar = (props: CustomerProps) => {
	const { client, email, creationDate } = props;

	return (
		<div className={style["customer-container"]}>
			<div className={style["mobile-version"]}>
				<div className={style["about"]}>
					<h2 className={style["id"]}>
						{email}
					</h2>
					<span><HiDotsVertical color="#00a4d6"/></span>
				</div>
				<div className={style["information"]}>
					<div>
						<span className={style["receiver"]}>{client}</span>
					</div>
				</div>
			</div>
			<div className={style["desktop-version"]}>
					<h2 className={style["id"]}>
						{email}
					</h2>
					<span className={style["receiver"]}>{client}</span>
					<span className={style["date"]}>{convertTimestamp(creationDate)}</span>
				<span><HiDotsVertical color="#00a4d6"/></span>
			</div>
		</div>
	);
};

export default CustomerBar

