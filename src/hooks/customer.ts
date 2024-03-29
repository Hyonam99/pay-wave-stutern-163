/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	createCustomer,
	getAllCustomers,
	getCustomer,
} from "api/services/customer";
import { AxiosError } from "axios";
import { CreateCustomerDto } from "interfaces/Interfaces";
import { MutationOptionsType } from "interfaces/Types";

const key = "customer";


export const useCreateCustomer = (
	options: MutationOptionsType = {},
	token: string
) => {
	const mutation = useMutation({
		mutationFn: (userData: CreateCustomerDto) =>
			createCustomer(userData, token),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		createCustomer: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useGetAllCustomers = (token: string) => {
	const response = useQuery({
		queryKey: [key],
		queryFn: () => getAllCustomers(token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useGetCustomer = (email: string, token: string) => {
	const response = useQuery({
		queryKey: [key],
		queryFn: () => getCustomer(email, token),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};
