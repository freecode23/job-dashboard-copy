import React from 'react';
import axios from "axios"


export const axiosInstance = axios.create({
    // baseURL: "http://localhost:3000/api/"
    baseURL: process.env.REACT_APP_BASE_URL
})
