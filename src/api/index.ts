// axiosInstance.js

import axios from 'axios';

const pay_Wave_Instance = axios.create({
    baseURL: "https://paywave-5qtm8.ondigitalocean.app"
});

export const pay_Wave_InstanceX = axios.create({
    baseURL: "https://paywave.cyclic.app"
});

export default pay_Wave_Instance
