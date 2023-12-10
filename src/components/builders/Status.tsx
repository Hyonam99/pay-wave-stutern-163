import React from "react";
import style from "styles/components/builders/Ministyles.module.scss";

interface StatusProps {
	status: string;
}

const Status = (props: StatusProps) => {
	const { status } = props;

	let statusComponent;

	if (status === "paid") {
		statusComponent = (
			<div
				className={`${style["status"]} ${style["status-paid"]}`}
				data-testid="paid-status-component"
			>
				Paid
			</div>
		);
	} else if (status === "pending") {
		statusComponent = (
			<div
				className={`${style["status"]} ${style["status-pending"]}`}
				data-testid="pending-status-component"
			>
				Pending
			</div>
		);
	} else {
		statusComponent = (
			<div
				className={`${style["status"]} ${style["status-draft"]}`}
				data-testid="draft-status-component"
			>
				Draft
			</div>
		);
	}

	return <>{statusComponent}</>;
};

export default Status;
