"use client"

import { useState } from "react";
import Header from "@/component/layout/Header";
import MobileMenu from "@/component/layout/MobileMenu";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className={""}>
            <Header onToggleMenu={toggleMenu}></Header>
            <MobileMenu isOpen={menuOpen} />
        </div>
    );
}
