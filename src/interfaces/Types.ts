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
	createdAt?: string;
	id?: number;
	invoiceId?: number;
	updatedAt?: string;
};

export type BusinessInfoType = {
	businessName?: string | undefined;
	accountName?: string | undefined;
	accountNumber?: string | undefined;
	balance?: string | undefined; //this will be converted to a number upon rendering
	bankCode?: string | undefined;
	city?: string | undefined;
	country?: string | undefined;
	createdAt?: string | undefined; //Time format is "2023-11-25T17:40:34.438Z"
	email?: string | undefined;
	id?: number;
	phoneNumber?: string | undefined; // format is "08045545544"
	streetAddress?: string | undefined;
	userId?: number;
};

export type serviceResponse = {
	success: boolean;
	message: string;
};

export type CustomerInfoType = {
	id: number; //the actual id used as payload for creating invoice
	name: string;
	email: string;
	businessAccountId: number;
	createdAt: string; //"2023-11-26T19:04:30.502Z"
	updatedAt: string; //"2023-11-26T19:04:30.502Z"
};

export type InvoiceDetailsType = {
	businessAccountId?: number;
	createdAt?: string;
	customerId?: number;
	id?: number; // the actual invoice id
	items?: InvoiceItemsType[];
	paymentDueDate?: string;
	paymentStatus?: string; //"PENDING"
	reference?: string;
	totalAmount?: string; //converted to number upon rendering
	updatedAt?: string;
};

export type LinkUrlData = {
	authorization_url: string;
	access_code: string;
	reference: string;
};

export type GenerateLinkData = {
	status: boolean;
	message: string;
	data: LinkUrlData;
};

export type GenerateLinkResponse = {
	data: GenerateLinkData;
	message: string;
	success: boolean;
};

export type PaginationParams = {
	limit: number
	page: number
}


export type TransactionMetaData = {
	businessName: string
	payerDetails: string
}
export type TransactionHistory = {
	amount: string
	businessAccountId: number
	createdAt: string
	customerId: string
	id: number
	invoiceId: number
	metadata: TransactionMetaData
	reference: string
	transactionType: string
	updatedAt: string
}
