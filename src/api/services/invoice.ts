import pay_Wave_Instance from '../index';
import { InvoiceItemsType } from 'interfaces/Types';

const { post, get } = pay_Wave_Instance;

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

