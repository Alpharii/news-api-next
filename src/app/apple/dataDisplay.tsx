"use client";

import React, { useEffect, useState } from 'react';
import { getApple } from '../services/Apple';

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
                const result = await getApple();
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
        <div className=''>
            {data.length > 0 ? (
                <ul>
                    {data.map((article, index) => (
                        <li key={index}>
                            <h2>{article.title}</h2>
                            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
}
