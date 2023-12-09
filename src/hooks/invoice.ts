import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { createInvoice, getAllInvoices, getInvoice } from "api/services/invoice";
import { InvoiceItemsType, MutationOptionsType } from 'interfaces/Types';
import { AxiosError } from "axios";


const invoice_Key = "invoice";

export const useCreateInvoice = (
	options: MutationOptionsType = {},
	customerId: number,
	token: string
) => {
	const mutation = useMutation({
		mutationFn: (invoiceData: InvoiceItemsType[]) =>
			createInvoice(invoiceData, customerId, token),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		createInvoice: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
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

export const useGetInvoice = (invoiceId: number, token: string) => {

	const response = useQuery({
		queryKey: [`single-invoiceId-${invoiceId}`],
		queryFn: () => getInvoice(invoiceId, token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};
