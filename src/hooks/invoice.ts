/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';
import { createCustomer, createInvoice } from "api/services";
import { AxiosError } from "axios";
import { CreateCustomerDto } from 'interfaces/Interfaces';
import { MutationOptionsType } from 'interfaces/Types';

export const useCreateInvoice = (options: MutationOptionsType = {}) => {
  const mutation = useMutation({mutationFn: (userData: CreateCustomerDto) => createInvoice(userData),
        onSuccess: (data: any) => {
          options.onSuccess && options.onSuccess(data);
        },
        onError: (error: AxiosError) => {
          options.onError && options.onError(error);
        },
    }
  );

  return {
    create: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending
  };
};

export const useCreateCustomer = (options: MutationOptionsType = {}, token: string) => {
  const mutation = useMutation({mutationFn: (userData: CreateCustomerDto) => createCustomer(userData, token),
        onSuccess: (data: any) => {
          options.onSuccess && options.onSuccess(data);
        },
        onError: (error: AxiosError) => {
          options.onError && options.onError(error);
        },
    }
  );

  return {
    create: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending
  };
};