import React, { useState } from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CustomFilterProps {
	// eslint-disable-next-line no-unused-vars
	setValueChange: (e: string) => void;
	displayData: string[];
}

const CustomFilter = ({ setValueChange, displayData }: CustomFilterProps) => {
	const [selectedValue, setSelectedValue] = useState(displayData[0]);

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedValue(event.target.value as string);
		setValueChange(event.target.value as string);
	};

	return (
		<>
			<FormControl sx={{ minWidth: 120 }} size="small">
				<InputLabel id="filter-invoice-label">Filter</InputLabel>
				<Select
					labelId="filter-invoice-label"
					id="filter-invoice"
					value={selectedValue}
					label="filter-invoice"
					onChange={handleChange}
				>
					{displayData.map((eachItem, i) => {
						return (
							<MenuItem key={`filter-${eachItem}-${i + 1}`} value={eachItem}>
								{eachItem}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</>
	);
};

export default CustomFilter;
