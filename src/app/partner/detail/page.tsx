"use client";

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";
import PartnerProposalCard from "@/components/features/partner/detail/PartnerProposalCard";
import PartnerDetailCard from "@/components/features/partner/detail/PartnerDetailCard";

const partnerDetailData = {
    name: "전**",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    jobTitle: "백엔드 개발자",
    experienceYears: 10,
    projectCount: 5,
    desiredConditions: {
        type: "개인",
        availability: "원격/상주 가능",
        location: "서울",
        period: "2025-12-31",
        rate: "협의",
    },
    headline: "Java, Spring 기반의 백엔드 시스템 개발자입니다.",
    introduction: `팀원들과의 원활한 소통을 바탕으로 기획 의도를 정확히 파악하고, 맡은 기능을 책임감 있게 구현하는 것을 중요하게 생각합니다. 
    
    특히 MSA(Microservice Architecture) 환경에서의 개발 경험이 풍부하며, 대용량 트래픽 처리와 안정적인 시스템 운영에 강점이 있습니다. 
    
    Spring Cloud, Kafka, Kubernetes 등을 활용하여 확장성 높고 장애에 유연한 시스템을 구축해왔습니다. 새로운 기술을 학습하고 적용하는 것에 두려움이 없으며, 동료들과의 코드 리뷰를 통해 함께 성장하는 것을 즐깁니다. 최고의 동료가 되어 프로젝트 성공에 기여하고 싶습니다.`,
    skills: ["Spring Cloud", "Kafka", "Kubernetes", "MSA", "React", "TypeScript", "Javascript", "ISMS"],
    links: {
        github: "https://github.com",
        notion: "https://notion.so",
    },
    resumeFiles: [
        { name: "전XX_이력서.pdf", url: "#" },
        { name: "전XX_포트폴리오.pdf", url: "#" },
    ],
    projects: [
        {
            id: 1,
            company: "헬로**",
            role: "백엔드 개발자",
            title: "AI 시스템 운영",
            period: "2023.07 ~ 2023.12",
            description: "AI 기반 추천 시스템의 백엔드 인프라를 구축하고 운영했습니다. 대용량 데이터 처리 파이프라인을 설계하고 Kafka를 이용한 실시간 이벤트 처리를 구현했습니다."
        },
        {
            id: 2,
            company: "스마트**",
            role: "보안 엔지니어",
            title: "정보보호 관리 시스템",
            period: "2021.02 ~ 2021.07",
            description: "정보보호관리체계(ISMS) 인증을 위한 시스템을 개발했으며, 보안 취약점 분석 및 대응 프로세스를 자동화했습니다."
        },
        {
            id: 3,
            company: "한국**",
            role: "프론트엔드 개발자",
            title: "FLEX/JAVASCRIPT 컨버팅 리뉴얼",
            period: "2020.11 ~ 2021.01",
            description: "레거시 Flex 시스템을 최신 웹 표준 기술인 React와 TypeScript로 마이그레이션하는 프로젝트를 주도했습니다."
        }
    ]
};

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div>
            <Header onToggleMenu={toggleMenu}></Header>
            <MobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu}/>

            <main className={"mx-auto max-w-5xl px-6 py-10"}>
                <div className="flex flex-col gap-8 md:flex-row">
                    {/* 좌측 컨텐츠 영역 */}
                    <PartnerDetailCard {...partnerDetailData} />

                    {/* 우측 콘텐츠 영역 */}
                    <PartnerProposalCard />
                </div>
            </main>
        </div>
    );
}