"use client"

import { useState } from "react";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import ProjectCard from "@/components/ui/ProjectCard";
import { FiChevronRight } from "react-icons/fi";

export default function Home() {
    const projects = [
        {
            dueDate: "~08/25(월)",
            title: "[중급] 삼성 그룹 그룹웨어 개발",
            tags: ["개발", "Spring", "JPA", "Oracle"],
            location: "서울",
            level: "중급",
            duration: "12개월",
            cost: "800만원",
            likes: 0,
        },
        {
            dueDate: "~08/30(금)",
            title: "[초급] 쇼핑몰 프론트엔드 유지보수",
            tags: ["프론트엔드", "React", "JavaScript", "Figma"],
            location: "경기",
            level: "초급",
            duration: "6개월",
            cost: "500만원",
            likes: 3,
        },
        {
            dueDate: "~09/10(화)",
            title: "[고급] 공공기관 백엔드 시스템 고도화",
            tags: ["백엔드", "Spring Boot", "MySQL", "Linux"],
            location: "대전",
            level: "고급",
            duration: "10개월",
            cost: "950만원",
            likes: 5,
        },
        {
            dueDate: "~09/01(일)",
            title: "[중급] 병원 예약 시스템 리뉴얼",
            tags: ["Next.js", "TypeScript", "Tailwind", "UX"],
            location: "부산",
            level: "중급",
            duration: "8개월",
            cost: "750만원",
            likes: 2,
        },
    ];

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className={"bg-[#f9f9f9] min-h-screen"}>
            <Header onToggleMenu={toggleMenu}></Header>
            <MobileMenu isOpen={menuOpen} />
            <main className={"flex flex-col max-w-5xl mx-auto px-6 py-12"}>
                <section className={"flex flex-col gap-3 bg-white border p-7 rounded-2xl shadow-md"}>
                    <div className={"flex tracking-tight"}>
                        <div className={"text-blue-500"}>135개</div>
                        <div className={""}>의 프로젝트가 열려있습니다.</div>
                    </div>
                    <div className={"grid grid-cols-1 gap-3"}>
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </div>
                    <div className="w-full border-t border-gray-200 mt-4">
                        <div className="flex justify-center items-center mt-6 gap-2 cursor-pointer">
                            <span className="text-sm font-semibold text-gray-700">더보기</span>
                            <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                                <FiChevronRight size={14} className="text-gray-500" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
