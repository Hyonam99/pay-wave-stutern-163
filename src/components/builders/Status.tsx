import React from 'react';
import style from "styles/components/builders/Ministyles.module.scss";

interface StatusProps {
  status: string;
}

const Status = (props: StatusProps) => {
  const { status } = props;

  let statusComponent;

  if (status === 'paid') {
    statusComponent = <div className={`${style["status"]} ${style["status-paid"]}`}>Paid</div>;
  } else if (status === 'pending') {
    statusComponent = <div className={`${style["status"]} ${style["status-pending"]}`}>Pending</div>;
  } else {
    statusComponent = <div className={`${style["status"]} ${style["status-draft"]}`}>Draft</div>;
  }

  return <>{statusComponent}</>;
}

export default Status
