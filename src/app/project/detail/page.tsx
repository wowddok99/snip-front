"use client";

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";
import ProjectApplicationCard from "@/components/features/project/detail/ProjectApplicationCard";
import RecommendedProjectCard from "@/components/features/project/detail/RecommendedProjectCard";
import ProjectDetailCard from "@/components/features/project/detail/ProjectDetailCard";

const projectData = {
    title: "[원격/재택] 핀테크 결제 API 서버 신규 구축 프로젝트",
    details: [
        { key: "budget", label: "예상 금액", value: "600만원 ~ 850만원" },
        { key: "startDate", label: "시작 예정일", value: "2025-09-01" },
        { key: "role", label: "직군/직무", value: "서버/백엔드 개발자 > Java, Spring" },
        { key: "duration", label: "예상 기간", value: "6개월" },
        { key: "location", label: "근무 위치", value: "원격/재택 근무" },
        { key: "workTime", label: "근무 시간", value: "자율 근무 (코어타임: 10:00~16:00)" },
    ],
    techStack: ["Java", "Spring Boot", "JPA", "MySQL", "AWS"],
    sections: [
        {
            title: "프로젝트 소개",
            type: "paragraph" as "paragraph" | "list",
            content:
                "새롭게 런칭하는 핀테크 서비스의 핵심 결제 시스템 API 서버를 Spring Boot 기반으로 신규 개발하는 프로젝트입니다. 안정성과 확장성을 최우선으로 고려하여 설계 및 개발을 진행합니다.",
        },
        {
            title: "주요 담당 업무",
            type: "list" as "paragraph" | "list",
            items: [
                "결제/정산 관련 RESTful API 설계 및 개발",
                "대용량 트래픽 처리를 위한 시스템 아키텍처 설계 참여",
                "MySQL 데이터베이스 모델링 및 JPA를 이용한 개발",
                "AWS (EC2, S3, RDS) 환경에서의 애플리케이션 배포 및 운영",
            ],
        },
        {
            title: "자격 요건",
            type: "list" as "paragraph" | "list",
            items: [
                "Java & Spring Boot 기반 웹 애플리케이션 개발 경력 3년 이상",
                "JPA(Hibernate) 사용 경험 및 ORM에 대한 깊은 이해",
                "MySQL 등 RDBMS 설계 및 운영 경험",
                "Git 등 분산 버전 관리 시스템 사용에 능숙한 분",
            ],
        },
        {
            title: "우대 사항",
            type: "list" as "paragraph" | "list",
            items: [
                "결제 또는 금융 서비스 개발 경험",
                "MSA(Microservice Architecture) 설계 및 개발 경험",
                "Docker, Kubernetes 등 컨테이너 기술 사용 경험",
                "CI/CD 파이프라인 구축 및 운영 경험",
            ],
        },
    ],
};

const recommendedProjectsData = [
    {
        title: "[재택] 대규모 트래픽 커머스 플랫폼 MSA 전환",
        tags: "서버/백엔드 | Python, Django",
        price: "700~900만원",
    },
    {
        title: "[판교] AI 기반 데이터 파이프라인 구축",
        tags: "상주 | 데이터 엔지니어 | Kafka, Spark",
        price: "650~800만원",
    },
    {
        title: "[강남] 블록체인 기반 NFT 거래소 백엔드 개발",
        tags: "상주 | 서버/백엔드 | Node.js, NestJS",
        price: "700~950만원",
    },
];

export default function ProjectDetailPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header onToggleMenu={toggleMenu} />
            <MobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu} />

            <main className="mx-auto max-w-5xl px-6 py-10">
                <div className="flex flex-col gap-8 md:flex-row">

                    {/* 좌측 컨텐츠 */}
                    <div className="w-full md:w-2/3">
                        <ProjectDetailCard {...projectData} />
                    </div>

                    {/* 우측 사이드바 */}
                    <div className="w-full md:w-1/3">
                        <div className="flex flex-col gap-8">
                            <ProjectApplicationCard />

                            <div className="flex flex-col gap-4">
                                <h3 className="text-base font-bold">관련 추천 프로젝트</h3>
                                {recommendedProjectsData.map((project) => (
                                    <RecommendedProjectCard key={project.title} {...project} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}