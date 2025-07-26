"use client"

import { useState } from "react";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className={""}>
            <Header onToggleMenu={toggleMenu}></Header>
            <MobileMenu isOpen={menuOpen} />
            <main className={"max-w-5xl mx-auto px-6 py-12"}>
                <section className={"flex flex-col gap-2.5 items-center text-center"}>
                    <h1>
                        <div className={"text-3xl font-bold"}>IT 전문가와 기업을 가장 빠르게 연결하는 플랫폼</div>
                    </h1>
                    <p className={"font-normal text-gray-600"}>
                        Devit은 현업 중심의 데이터와 검증된 인재를 기반으로<br/>
                        기업과 프리랜서 간 최적의 매칭을 실현하는 스마트 매칭 플랫폼입니다.
                    </p>
                </section>
            </main>
        </div>
    );
}
