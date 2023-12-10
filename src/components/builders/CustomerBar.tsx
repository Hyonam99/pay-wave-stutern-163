import React from "react";
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
		<div className={style["customer-container"]} data-testid="customer-bar-container">
			<div className={style["mobile-version"]} data-testid="customer-bar-mobile">
				<div className={style["about"]}>
					<h2 className={style["id"]}>
						{email}
					</h2>
					<span><HiDotsVertical color="#00a4d6"/></span>
				</div>
				<div className={style["information"]}>
					<div data-testid="customer-information">
						<span className={style["receiver"]}>{client}</span>
					</div>
				</div>
			</div>
			<div className={style["desktop-version"]} data-testid="customer-bar-desktop">
					<h2 className={style["id"]} data-testid="customer-email">
						{email}
					</h2>
					<span className={style["receiver"]} data-testid="customer-name">{client}</span>
					<span className={style["date"]}>{convertTimestamp(creationDate)}</span>
				<span><HiDotsVertical color="#00a4d6"/></span>
			</div>
		</div>
	);
};

export default CustomerBar

