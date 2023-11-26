/* eslint-disable no-unused-vars */

export type MutationOptionsType = {
	onSuccess?: (data: any) => void;
	onError?: (error: any) => void;
};

export type DecryptedToken = {
	userId: number;
	exp: number;
	iat: number;
};

export type InvoiceItemsType = {
	name: string;
	description: string;
	price: number;
	quantity: number;
};
