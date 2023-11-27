import React from "react";
import { Route, Routes } from "react-router-dom";
import {
	LandingPage,
	Dashboard,
	Login,
	Register,
	Customer,
	Invoices,
	InvoiceDetail,
	Profile,
} from "pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/invoices" element={<Invoices />} />
			<Route path="/invoice/:id" element={<InvoiceDetail />} />
			<Route path="/customers" element={<Customer />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

export default App;
