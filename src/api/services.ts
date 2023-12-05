import pay_Wave_Instance from '.';
import { BusinessInfoType, InvoiceItemsType, PaginationParams } from 'interfaces/Types';
import { CreateCustomerDto, LoginDTO, SignupDTO, GenerateLinkDto, AccountUpdateDTO } from 'interfaces/Interfaces';

const { post, get } = pay_Wave_Instance;

/****************************************************************************************************
 * Authentication Routes
 ****************************************************************************************************/

export const signupBusiness = async (payload: SignupDTO) => {
    const response = post(`/auth/register`, payload)
    return (await response).data
}

export const loginBusiness = async (payload: LoginDTO) => {
    const response = post(`/auth/login`, payload)
    return (await response).data
}

export const logoutBusiness = async () => {
    localStorage.removeItem('paywave-token')
}

/****************************************************************************************************
 * Business Routes
 ****************************************************************************************************/

export const getBusinessData = async (token: string) => {
    const response = get(`/business-info`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const updateBusiness = async (payload: BusinessInfoType, token: string) => {
    const response = post(`/update-business-info`, payload, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const updateAccountDetails = async (payload: AccountUpdateDTO, token: string) => {
    const response = post(`/update-payment-info`, payload, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const generatePaymentLink = async (invoiceId: number, payload: GenerateLinkDto, token: string) => {
    const response = post(`/payment/${invoiceId}`, payload, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const getAllTransactions = async (params: PaginationParams, token: string) => {
    const response = get(`/transactions?limit=${params.limit}&page=${params.page}&transactionType=card`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

/****************************************************************************************************
 * Invoicing based Routes
 ****************************************************************************************************/

export const createInvoice = async (payload: InvoiceItemsType[], customerId: number, token: string) => {
    const response = post(`create-invoice/${customerId}`, {items:payload}, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const getAllInvoices = async (token: string) => {
    const response = get(`/all-invoices`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const getInvoice = async (invoiceId: number, token: string) => {
    const response = get(`/invoice/${invoiceId}`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

/****************************************************************************************************
 * Customer based Routes
 ****************************************************************************************************/

export const createCustomer = async (payload: CreateCustomerDto, token: string) => {
    const response = post(`/create-customer`, payload, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const getAllCustomers = async (token: string) => {
    const response = get(`/allCustomers`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const getCustomer = async (payload: string, token: string) => {
    const response = get(`/customer`, {params: {customerEmail: payload}, headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}
