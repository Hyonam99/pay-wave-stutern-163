import React, { useState, useEffect, useContext } from "react";
import { DashboardCard } from "components";
import { Box } from "@mui/material";
import style from "styles/components/main/Dashboardheader.module.scss";
import { GiSunCloud, GiMoon } from "react-icons/gi";
import { RiSunFoggyFill } from "react-icons/ri";
import { useGetBusinessData } from "hooks/business";
import { AuthContext } from "providers/AuthProvider";
import { BusinessInfoType, InvoiceDetailsType } from "interfaces/Types";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { useGetAllInvoice } from "hooks/invoice";
import { formatCurrency } from "utils/helpers";
import { useGetAllCustomers } from "hooks/customer";

const DashboardHeader = () => {
	const { token } = useContext(AuthContext);
	const { data } = useGetBusinessData(token as string ?? "");
	const [timeOfDay, setTimeOfDay] = useState({ time: "", icon: GiSunCloud });
	const getInvoice = useGetAllInvoice(token as string);
	const pendingInvoice = getInvoice?.data?.filter(
		(item: InvoiceDetailsType) =>
			item?.paymentStatus?.toLowerCase() == "pending"
	);
	const getCustomer = useGetAllCustomers(token as string);

	useEffect(() => {
		function getTimeOfDay() {
			const currentTime = new Date().getHours();
			let greetingTime;
			let icon = GiSunCloud;
			switch (true) {
				case currentTime >= 5 && currentTime < 12:
					greetingTime = "morning";
					icon = GiSunCloud;
					break;
				case currentTime >= 12 && currentTime < 17:
					greetingTime = "afternoon";
					icon = RiSunFoggyFill;
					break;
				default:
					greetingTime = "evening";
					icon = GiMoon;
					break;
			}
			return { greetingTime, icon };
		}

		const { greetingTime, icon } = getTimeOfDay();
		setTimeOfDay({ time: greetingTime, icon: icon });
	}, []);
	return (
		<section className={style["container"]}>
			<span className={style["cards-greetings"]}>
				Good {timeOfDay.time} {<timeOfDay.icon size={16} />}
			</span>
			<h3>{(data as BusinessInfoType)?.businessName ?? ""}</h3>
			<Box className={style["container_wrapper"]}>
				<DashboardCard
					title="Balance"
					sub_Text="Total balance"
					content={
						formatCurrency(parseInt((data as BusinessInfoType)?.balance as string ?? "0") / 100) ?? 0
					}
					icon={<FaRegMoneyBillAlt size={18} color="#00a4d6"/>}
				/>
				<DashboardCard
					title="Pending"
					sub_Text="Total pending invoices"
					content={pendingInvoice?.length ?? 0}
					icon={<MdOutlinePendingActions size={18} color="#00a4d6"/>}
				/>
				<DashboardCard
					title="Invoices"
					sub_Text="Total invoices"
					content={getInvoice?.data?.length ?? 0}
					icon={<RiTodoLine size={18} color="#00a4d6"/>}
				/>
				<DashboardCard
					title="Customer"
					sub_Text="Total customers"
					content={getCustomer?.data?.length ?? 0}
					icon={<LuUsers2 size={18} color="#00a4d6"/>}
				/>
			</Box>
		</section>
	);
};

export default DashboardHeader;
