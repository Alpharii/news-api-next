"use client";

import React, { useEffect, useState } from 'react';
import { getNews } from '../services/news';

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

export default function DataDisplay() {
    const [data, setData] = useState<Article[]>([]); // Ganti JSON dengan Article array
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await getNews();
                setData(result.articles); // Pastikan data diatur ke array articles
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6'>
        {data.length > 0 ? (
            data.map((article, index) => (
                <div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4'>
                    <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{article.title}</h2>
                    {article.urlToImage && <img src={article.urlToImage} alt={article.title} className='rounded-t-lg' />}
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Read more</a>
                </div>
            ))
        ) : (
            <p>No articles found.</p>
        )}
    </div>
    );
}
