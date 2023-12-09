import pay_Wave_Instance from '../index';
import { CreateCustomerDto } from 'interfaces/Interfaces';

const { post, get } = pay_Wave_Instance;


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
