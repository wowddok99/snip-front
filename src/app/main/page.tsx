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
            <main className={"flex flex-col max-w-5xl mx-auto px-6 py-12"}>
                {/* 서비스 소개 섹션 */}
                <section className={"flex flex-col gap-[50px] md:gap-[70px]"}>
                    <div className={"flex flex-col md:flex-row justify-center items-center gap-10"}>
                        <div className={"flex flex-col gap-1.5 md:gap-2.5 items-center text-center"}>
                            <h1>
                                <div className={"text-[20px] md:text-[30px] font-bold"}>
                                    IT 전문가와 기업을<br/>
                                    가장 빠르게 연결하는 플랫폼
                                </div>
                            </h1>
                            <p className={"text-[14px] md:text-[16px] font-normal text-gray-600"}>
                                Devit은 현업 중심의 데이터와 검증된 인재를 기반으로<br/>
                                기업과 프리랜서 간 최적의 매칭을 실현하는 스마트 매칭 플랫폼입니다.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-2 justify-center items-center px-5 py-8 rounded-2xl border-[1px]"}>
                            <div className={"text-gray-600 text-center"}>원하는 서비스를 쉽고<br className={"md:hidden"}/> 간편하게 찾을 수 있어요!</div>
                            <div className={"flex flex-col items-center justify-center gap-1"}>
                                <div className={"flex justify-center gap-1"}>
                                    <div className={"px-4 rounded-lg border-[1px] py-2 font-semibold tracking-tight cursor-pointer"}>
                                        프로젝트 둘러보기
                                    </div>
                                    <div className={"px-4 rounded-lg border-[1px] py-2 font-semibold tracking-tight cursor-pointer"}>
                                        이용 방법
                                    </div>
                                </div>
                                <div className={"px-11 rounded-lg border-[1px] py-2 font-semibold tracking-tight cursor-pointer"}>
                                    기업용 맞춤 상담받기
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 md:grid-cols-4 gap-4"}>
                        <div className={"flex flex-col gap-2 justify-center items-center md:border-r"}>
                            <div className={"text-2xl md:text-3xl font-bold"}>50명+</div>
                            <div className={"text-m text-gray-600"}>알파테스터 참여자</div>
                        </div>
                        <div className={"flex flex-col gap-2 justify-center items-center md:border-r"}>
                            <div className={"text-2xl md:text-3xl font-bold"}>100건+</div>
                            <div className={"text-m text-gray-600"}>피드백 수집</div>
                        </div>
                        <div className={"flex flex-col gap-2 justify-center items-center md:border-r"}>
                            <div className={"text-2xl md:text-3xl font-bold"}>2024년 4분기</div>
                            <div className={"text-m text-gray-600"}>서비스 출시 예정</div>
                        </div>
                        <div className={"flex flex-col gap-2 justify-center items-center md:border-none"}>
                            <div className={"text-2xl md:text-3xl font-bold"}>120시간+</div>
                            <div className={"text-m text-gray-600"}>누적 개발 시간</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
