"use client";

import { useParams } from "next/navigation";

export default function AppleId() {
    const { id } = useParams();
    

    return (
        <div>
            <h1>Apple ID: {id}</h1>
        </div>
    );
}
