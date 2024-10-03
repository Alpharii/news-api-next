"use client";
import { useParams } from "next/navigation";


export default function TeslaId() {
    const { id } = useParams();
    return (
        <div>
            <h1>Tesla ID : {id}</h1>
        </div>
    );
}