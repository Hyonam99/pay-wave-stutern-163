/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getAllInvoices, getBusinessData, getInvoice } from "api/services";

const business_Key = "business";
const invoice_Key = "invoice";

export const useGetBusinessData = (token: string) => {
	const response = useQuery({
		queryKey: [business_Key],
		queryFn: () => getBusinessData(token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useGetInvoice = (invoiceId: number, token: string) => {
	const response = useQuery({
		queryKey: [invoice_Key],
		queryFn: () => getInvoice(invoiceId, token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useGetAllInvoice = (token: string) => {
	const response = useQuery({
		queryKey: [invoice_Key],
		queryFn: () => getAllInvoices(token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};
