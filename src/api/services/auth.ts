import pay_Wave_Instance from '../index';
import { LoginDTO, SignupDTO } from 'interfaces/Interfaces';

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
