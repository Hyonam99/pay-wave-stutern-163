import React, { useState, useEffect, useContext } from "react";
import { DashboardCard } from "components";
import { Box } from "@mui/material";
import style from "styles/components/main/Dashboardheader.module.scss";
import { random_Transactions } from "assets/mocked-data/constants";
import { GiSunCloud, GiMoon } from "react-icons/gi";
import { RiSunFoggyFill } from "react-icons/ri";
import { useGetBusinessData } from "hooks/business";
import { AuthContext } from "providers/AuthProvider";
import { BusinessInfoType } from "interfaces/Types";

const DashboardHeader = () => {
	const {token} = useContext(AuthContext)
	const {data} = useGetBusinessData(token as string)
	const [timeOfDay, setTimeOfDay] = useState({ time: "", icon: GiSunCloud });

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
				{random_Transactions?.slice(0, 4).map((item, i) => (
					<DashboardCard
						key={`trx-key-0-${i + 1}`}
						title={item.title}
						sub_Text={item.sub_Text}
						content={item.content}
						icon={<item.icon size={18} />}
					/>
				))}
			</Box>
		</section>
	);
};

export default DashboardHeader;
