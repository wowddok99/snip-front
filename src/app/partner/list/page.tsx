"use client"

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";
import PartnerSearchFilters from "@/components/features/partner/list/PartnerSearchFilters";
import PartnerProfileCard, { PartnerProfileCardData } from "@/components/features/partner/list/PartnerProfileCard";
import Link from "next/link";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);

    const partnerData: PartnerProfileCardData = {
        name: "전**",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        desiredConditions: {
            type: "개인",
            availability: "원격/상주 가능"
        },
        experienceYears: 10,
        jobTitle: "백엔드 개발자",
        projectCount: 5,
        headline: "Java, Spring 기반의 백엔드 시스템 개발자입니다.",
        introduction: `팀원들과의 원활한 소통을 바탕으로 기획 의도를 정확히 파악하고, 맡은 기능을 책임감 있게 구현하는 것을 중요하게 생각합니다. 
        특히 MSA(Microservice Architecture) 환경에서의 개발 경험이 풍부하며, 대용량 트래픽 처리와 안정적인 시스템 운영에 강점이 있습니다. 
        Spring Cloud, Kafka, Kubernetes 등을 활용하여 확장성 높고 장애에 유연한 시스템을 구축해왔습니다. 
        새로운 기술을 학습하고 적용하는 것에 두려움이 없으며, 동료들과의 코드 리뷰를 통해 함께 성장하는 것을 즐깁니다. 
        최고의 동료가 되어 프로젝트 성공에 기여하고 싶습니다.`,
        skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'MySQL', 'PostgreSQL'],
    };

    return (
        <div>
            {/* 헤더(Header) */}
            <Header onToggleMenu={toggleMenu}></Header>
            <MobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu}/>

            <main className={"flex flex-col max-w-5xl mx-auto px-6 py-10"}>
                <Link href="/partner/detail">
                    <PartnerProfileCard data={partnerData} />
                </Link>
            </main>
        </div>
    );
}