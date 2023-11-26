/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import { getBusinessData, loginBusiness, signupBusiness } from "api/services";
import { AxiosError } from "axios";
import { LoginDTO, SignupDTO } from "interfaces/Interfaces";
import { MutationOptionsType } from "interfaces/Types";

const key = "customer";

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

// export const useGetInstitution = (params: PagedRequest) => {
// 	const response = useQuery([key, params], () => getInstitution(params), {
// 		enabled: true,
// 	});
// 	return {
// 		isSuccess: response.isSuccess,
// 		isError: response.isError,
// 		isLoading: response.isLoading,
// 		data: response.data ? response.data.body.records : [],
// 		meta: response.data
// 			? {
// 					size: response.data.body.size,
// 					page: response.data.body.page,
// 					total: response.data.body.total,
// 			  }
// 			: { size: params.size, page: params.size, total: 0 },
// 	};
// };

export const useGetBusinessData = () => {
	const response = useQuery({queryKey: [key], queryFn: () => getBusinessData()});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data : undefined,
	};
};
