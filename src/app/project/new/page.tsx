"use client";

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";

export default function ProjectNewPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 헤더 */}
            <Header onToggleMenu={toggleMenu} />
            <MobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu} />

            <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-6">

                {/* 페이지 타이틀 */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">프로젝트 등록</h1>
                    <p className="text-gray-600 text-sm mt-1">
                        프로젝트 상세 정보를 입력하고 지원자에게 제안할 수 있습니다.
                    </p>
                </div>

                {/* 프로젝트 등록 폼 */}
                <form className="flex flex-col gap-6 bg-white rounded-lg shadow-sm p-8">
                    {/* 프로젝트 기본 정보 */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">프로젝트명</label>
                            <input
                                type="text"
                                placeholder="예: 결제 API 서버 구축"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">예상 금액</label>
                            <input
                                type="text"
                                placeholder="예: 600만원 ~ 850만원"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">시작 예정일</label>
                            <input
                                type="date"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">예상 기간</label>
                            <input
                                type="text"
                                placeholder="예: 6개월"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">직군/직무</label>
                            <input
                                type="text"
                                placeholder="예: 서버/백엔드 개발자 > Java, Spring"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">근무 위치</label>
                            <input
                                type="text"
                                placeholder="예: 원격/재택"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* 프로젝트 소개 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">프로젝트 소개</label>
                        <textarea
                            rows={4}
                            placeholder="프로젝트 내용을 자세히 입력해주세요."
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 주요 담당 업무 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">주요 담당 업무</label>
                        <textarea
                            rows={3}
                            placeholder="예: 결제 API 개발, DB 설계 등"
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 자격 요건 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">자격 요건</label>
                        <textarea
                            rows={3}
                            placeholder="예: Java 3년 이상, Spring 경험 등"
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 우대 사항 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">우대 사항</label>
                        <textarea
                            rows={3}
                            placeholder="예: MSA 경험, AWS 사용 경험 등"
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 기술 스택 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">기술 스택</label>
                        <input
                            type="text"
                            placeholder="예: Java, Spring Boot, MySQL"
                            className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 제출 버튼 */}
                    <div className="flex justify-end pt-4 border-t">
                        <button
                            className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
                        >
                            등록하기
                        </button>
                    </div>
                </form>

            </main>
        </div>
    );
}
