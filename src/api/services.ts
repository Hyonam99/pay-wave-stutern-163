import { InvoiceItemsType } from 'interfaces/Types';
import pay_Wave_Instance from '.';
import { CreateCustomerDto, LoginDTO, SignupDTO } from 'interfaces/Interfaces';

const { post, get } = pay_Wave_Instance;

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

export const getBusinessData = async (token: string) => {
    const response = get(`/business-info`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const createInvoice = async (payload: InvoiceItemsType[], customerId: number, token: string) => {
    const response = post(`create-invoice/${customerId}`, {items:payload}, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

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

export const getAllInvoices = async (token: string) => {
    const response = get(`/all-invoices`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const getInvoice = async (invoiceId: number, token: string) => {
    const response = get(`/invoice/${invoiceId}`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}