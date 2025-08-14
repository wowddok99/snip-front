"use client";

import { useState } from "react";
import {
    FiBriefcase,
    FiSearch,
    FiFilePlus,
    FiUsers,
    FiAward,
    FiShield,
    FiMousePointer
} from "react-icons/fi";
import MainHeader from "@/components/layout/MainHeader";
import MainMobileMenu from "@/components/layout/MainMobileMenu";
import MainFooter from "@/components/layout/MainFooter";
import MainContactForm from "@/components/features/main/MainContactForm";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="bg-[#171c26] text-gray-300 font-sans">
            {/* 헤더(Header) */}
            <MainHeader onToggleMenu={toggleMenu} />
            <MainMobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu} />

            <main className="flex flex-col max-w-6xl mx-auto px-6 py-10">
                {/* 히어로(Hero) 섹션 */}
                <section className="py-6 md:py-24 px-6 rounded-2xl tracking-tight">
                    <div className="flex flex-col gap-7">
                        <div className={"flex flex-col gap-3 text-center"}>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-normal">
                                함께 일하고 싶은<br /> 사람을 연결합니다
                            </h1>
                            <p className="md:text-lg text-gray-400">
                                믿고 맡길 수 있는 전문가를 찾고 계신가요?
                                <br />
                                함께 일하고 싶은 사람과 지금 연결해보세요.
                            </p>
                        </div>
                        <div className="flex text-sm md:text-[16px] justify-center items-center gap-4 flex-wrap">
                            <button className="bg-blue-600 text-white font-semibold px-3 py-2.5 md:px-7 md:py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <FiSearch /> 프리랜서 찾기
                            </button>
                            <button className="bg-transparent text-gray-300 font-semibold px-3 py-2.5 md:px-7 md:py-3.5 rounded-xl border border-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <FiBriefcase /> 프로젝트 찾기
                            </button>
                        </div>
                    </div>
                </section>

                {/* 핵심 가치/장점(Features) 섹션 */}
                <section className="py-24 tracking-tight">
                    <div className={"flex flex-col gap-7"}>
                        <div className="flex flex-col gap-3 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">믿을 수 있는 협업,<br className={"md:hidden"}/> 이렇게 만듭니다.</h2>
                            <p className="text-gray-400 md:text-lg">불필요한 절차는 줄이고, 신뢰는 높였습니다.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-3 bg-[#252a36] p-8 rounded-2xl border border-gray-700 hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-blue-900/50 text-blue-400 rounded-full w-12 h-12 flex items-center justify-center">
                                    <FiAward className="text-2xl" />
                                </div>
                                <div className={"flex flex-col gap-3"}>
                                    <h3 className="text-2xl font-semibold text-white">검증된 전문가</h3>
                                    <p className="text-gray-400 leading-relaxed">엄격한 기준을 통과한 실력 있는 동료들과 함께하세요.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 bg-[#252a36] p-8 rounded-2xl border border-gray-700 hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-blue-900/50 text-blue-400 rounded-full w-12 h-12 flex items-center justify-center">
                                    <FiShield className="text-2xl" />
                                </div>
                                <div className={"flex flex-col gap-3"}>
                                    <h3 className="text-2xl font-semibold text-white">투명한 프로세스</h3>
                                    <p className="text-gray-400 leading-relaxed">계약부터 완료까지 안전하고 투명한 시스템을 제공합니다.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 bg-[#252a36] p-8 rounded-2xl border border-gray-700 hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-blue-900/50 text-blue-400 rounded-full w-12 h-12 flex items-center justify-center">
                                    <FiMousePointer className="text-2xl" />
                                </div>
                                <div className={"flex flex-col gap-3"}>
                                    <h3 className="text-2xl font-semibold text-white">간편한 사용 경험</h3>
                                    <p className="text-gray-400 leading-relaxed">복잡한 절차 없이, 누구나 빠르고 쉽게 시작할 수 있도록 설계했습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 서비스 이용 절차(How it works) 섹션 */}
                <section className="pt-6 pb-24 md:py-24 tracking-tight">
                    <div className={"flex flex-col gap-7"}>
                        <div className="flex flex-col gap-3 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">가장 빠른 협업의 시작</h2>
                            <p className="text-gray-400 text-lg">프로젝트 등록부터 계약까지, 모든 과정을 간편하게 해결하세요.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className={"flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2"}>
                                <div className="flex justify-center items-center">
                                    <div className="w-[68px] h-[68px] bg-gray-800 rounded-full flex items-center justify-center ring-gray-900/60">
                                        <FiFilePlus className="text-blue-400 text-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-white">1. 프로젝트 등록</h3>
                                <p className="text-gray-400 leading-relaxed">필요한 기술, 예산, 기간 등 프로젝트의 상세 내용을 간단히 작성하여 등록합니다.</p>
                            </div>

                            <div className={"flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2"}>
                                <div className="flex justify-center items-center">
                                    <div className="w-[68px] h-[68px] bg-gray-800 rounded-full flex items-center justify-center ring-gray-900/60">
                                        <FiUsers className="text-blue-400 text-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-white">2. 지원자 검토</h3>
                                <p className="text-gray-400 leading-relaxed">프로젝트에 지원한 전문가들의 프로필과 포트폴리오를 직접 확인하고 소통합니다.</p>
                            </div>

                            <div className={"flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2"}>
                                <div className="flex justify-center items-center">
                                    <div className="w-[68px] h-[68px] bg-gray-800 rounded-full flex items-center justify-center ring-gray-900/60">
                                        <FiAward className="text-blue-400 text-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-white">3. 계약 및 시작</h3>
                                <p className="text-gray-400 leading-relaxed">마음에 드는 전문가와 안전하게 계약을 체결하고 성공적인 프로젝트를 시작합니다.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 섹션 구분선 */}
                <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* 문의하기(Contact) 섹션 */}
                <section className="flex flex-col gap-7 text-center py-24 tracking-tight">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        궁금한 점이 있으신가요?
                    </h2>
                    <p className="md:text-lg text-gray-400 max-w-2xl mx-auto">
                        어떤 내용이든 편하게 남겨주세요.
                        <br />
                        저희 팀이 꼼꼼하게 확인하고 답변드리겠습니다.
                    </p>
                    <MainContactForm/>
                </section>
            </main>

            {/* 푸터(Footer) */}
            <MainFooter />
        </div>
    );
}