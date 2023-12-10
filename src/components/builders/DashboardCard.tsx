import React from "react";
import { CardProps } from "interfaces/Interfaces";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DashboardCard = (props: CardProps) => {
	const { title, sub_Text, content, icon } = props;
	return (
		<Card sx={{ display: "flex", padding: "8px", justifyContent: "space-between", minWidth: "200px" }} data-testid="main-card">
			<Box sx={{ display: "flex", flexDirection: "column" }} data-testid="card-text-box">
				<CardContent sx={{ flex: "1 0 auto", paddingY: 0 }}>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						margin={0}
						data-testid="card-title"
					>
						{title}
					</Typography>
					<Typography component="div" variant="h5" margin={0} data-testid="card-text-content">
						{content}
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }} data-testid="card-subtext">
					{sub_Text}
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: "3px" }} data-testid="card-icon">
				{icon}
			</Box>
		</Card>
	);
};

export default DashboardCard;
