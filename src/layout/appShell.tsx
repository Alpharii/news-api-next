"use client";

import Navbar from "./navbar";
import { usePathname } from "next/navigation";

export default function AppShell() {
    const pathName = usePathname();
    const disableNavbar = ["/auth/login", "/auth/register"]
    return (
        <div>
            {!disableNavbar.includes(pathName) && <Navbar/>}
            <h1>AppShell</h1>
        </div>
    );
}