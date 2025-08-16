"use client";

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";
import ProjectSummaryCard from "@/components/features/project/list/ProjectSummaryCard";
import Link from "next/link";

export default function ProjectListPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const projects = [
        {
            title: "[상주] [판교] 금융권 백엔드 시스템 고도화 프로젝트",
            workType: "상주",
            techStack: ["Spring Boot", "Java", "JPA", "MySQL"],
            budget: "500만원 ~ 650만원",
            startDate: "2025-08-25",
            duration: "6개월"
        },
        {
            title: "[원격] 쇼핑몰 결제 시스템 성능 개선 프로젝트",
            workType: "원격",
            techStack: ["Node.js", "AWS Lambda"],
            budget: "450만원 ~ 550만원",
            startDate: "2025-09-01",
            duration: "3개월"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 헤더 */}
            <Header onToggleMenu={toggleMenu} />
            <MobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu} />

            <main className="flex flex-col max-w-5xl mx-auto px-6 py-10 gap-3">
                {/* 상단 필터/정렬 영역 */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">프로젝트 {projects.length}개</span>
                    <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none">
                        <option>최신 순</option>
                        <option>금액 높은 순</option>
                        <option>금액 낮은 순</option>
                    </select>
                </div>

                {/* 프로젝트 카드 리스트 */}
                {projects.map((project, idx) => (
                    <Link href="/project/detail">
                        <ProjectSummaryCard key={idx} {...project} />
                    </Link>
                ))}
            </main>
        </div>
    );
}
