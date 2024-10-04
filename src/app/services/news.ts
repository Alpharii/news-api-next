import axios from 'axios';

const API_URLS: { [key: string]: string } = {
    apple: `https://newsapi.org/v2/everything?q=apple&from=2024-10-02&to=2024-10-02&sortBy=popularity&apiKey=ed4f05aca2b04539875512d8936b57a2`,
    tesla: `https://newsapi.org/v2/everything?q=tesla&from=2024-09-04&sortBy=publishedAt&apiKey=ed4f05aca2b04539875512d8936b57a2`,
    business: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed4f05aca2b04539875512d8936b57a2`,
    techcrunch: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed4f05aca2b04539875512d8936b57a2`,
    wallstreet: `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ed4f05aca2b04539875512d8936b57a2`,
    bitcoin: `https://newsapi.org/v2/everything?q=bitcoin&apiKey=ed4f05aca2b04539875512d8936b57a2`,
    home: `https://newsapi.org/v2/top-headlines?language=en&apiKey=ed4f05aca2b04539875512d8936b57a2`,
};

export const getNews = async (topic: string) => {
    const url = API_URLS[topic];

    if (!url) {
        throw new Error('Invalid topic');
    }

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch data');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};
