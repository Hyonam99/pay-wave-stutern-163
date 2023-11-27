/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { loginBusiness, signupBusiness } from "api/services";
import { AxiosError } from "axios";
import { LoginDTO, SignupDTO } from "interfaces/Interfaces";
import { MutationOptionsType } from "interfaces/Types";

export const useSignup = (options: MutationOptionsType = {}) => {
	const mutation = useMutation({
		mutationFn: (userData: SignupDTO) => signupBusiness(userData),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		create: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useLogin = (options: MutationOptionsType = {}) => {
	const mutation = useMutation({
		mutationFn: (userData: LoginDTO) => loginBusiness(userData),
		onSuccess: (data: any) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		create: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};
