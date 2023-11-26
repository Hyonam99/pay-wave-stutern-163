// axiosInstance.js

import axios from 'axios';

const pay_Wave_Instance = axios.create({
    baseURL: "https://paywave.cyclic.app"
});

export default pay_Wave_Instance
