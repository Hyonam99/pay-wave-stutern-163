import pay_Wave_Instance from '.';
import { CreateCustomerDto, LoginDTO, SignupDTO } from 'interfaces/Interfaces';

const { post } = pay_Wave_Instance;

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

export const getBusinessData = async () => {
    const response = post(`/business-info`)
    return (await response).data
}

export const createInvoice = async (payload: any) => {
    const response = post(`/auth/login`, payload)
    return (await response).data
}

export const createCustomer = async (payload: CreateCustomerDto, token: string) => {
    const response = post(`/create-customer`, payload, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}
