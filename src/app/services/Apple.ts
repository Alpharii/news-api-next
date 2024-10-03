import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = `https://newsapi.org/v2/everything?q=apple&from=2024-10-02&to=2024-10-02&sortBy=popularity&apiKey=ed4f05aca2b04539875512d8936b57a2`; //keynya jangan di ambil bg :v

export const getApple = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Memastikan error adalah AxiosError
            throw new Error(error.response?.data?.message || 'Failed to fetch data');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};