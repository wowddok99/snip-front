"use client"

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";
import PartnerSearchFilters from "@/components/features/PartnerSearchFilters";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);
    return (
        <div>
            {/* 헤더(Header) */}
            <Header onToggleMenu={toggleMenu}></Header>
            <MobileMenu isOpen={menuOpen} />

            <main className={"flex flex-col max-w-5xl mx-auto px-6 py-10"}>
                <PartnerSearchFilters />
            </main>
        </div>
    );
}