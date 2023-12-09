/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import {
	generatePaymentLink,
	getAllTransactions,
	getBusinessData,
	updateBusiness,
	updateAccountDetails
} from "api/services/business";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { BusinessInfoType, MutationOptionsType, PaginationParams } from "interfaces/Types";
import { GenerateLinkDto, AccountUpdateDTO } from "interfaces/Interfaces";

const transaction_Key = "transactions";
const business_Key = `business`;

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


export const useUpdateBusinessInfo = (
	options: MutationOptionsType = {},
	token: string
) => {
	const mutation = useMutation({
		mutationFn: (businessData: BusinessInfoType) =>
			updateBusiness(businessData, token),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		updateBusinessInfo: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useUpdateAccountDetails = (
	options: MutationOptionsType = {},
	token: string
) => {
	const mutation = useMutation({
		mutationFn: (accountDTO: AccountUpdateDTO) =>
		updateAccountDetails(accountDTO, token),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		updateAccount: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useGeneratePaymentLink = (
	options: MutationOptionsType = {},
	token: string,
	invoiceId: number
) => {
	const mutation = useMutation({
		mutationFn: (linkDTO: GenerateLinkDto) =>
			generatePaymentLink(invoiceId, linkDTO, token),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		generateLink: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};


export const useGetAllTransactions = (params: PaginationParams, token: string) => {
	const response = useQuery({
		queryKey: [transaction_Key],
		queryFn: () => getAllTransactions(params, token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data?.records : undefined,
		pagination: response.data ? response.data?.data?.pagination : undefined,
	};
};