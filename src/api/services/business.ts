import pay_Wave_Instance from '../index';
import { BusinessInfoType, PaginationParams } from 'interfaces/Types';
import { GenerateLinkDto, AccountUpdateDTO } from 'interfaces/Interfaces';

const { post, get } = pay_Wave_Instance;

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
