"use client"

import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";
import { FiUpload, FiPaperclip } from "react-icons/fi";

export default function PartnerNewPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileImageName, setProfileImageName] = useState("");
    const [attachmentNames, setAttachmentNames] = useState([]);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div>
            {/* 헤더 */}
            <Header onToggleMenu={toggleMenu} />
            <MobileMenu isOpen={menuOpen} onToggleMenu={toggleMenu} />

            <main className="flex flex-col max-w-5xl mx-auto px-6 py-10 gap-6">
                {/* 페이지 타이틀 */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">파트너 등록</h1>
                    <p className="text-gray-600 text-sm mt-1">
                        본인의 프로필과 희망 조건을 입력하면 프로젝트 제안서를 받아볼 수 있습니다.
                    </p>
                </div>

                {/* 폼 영역 */}
                <form className="flex flex-col gap-8 bg-white rounded-lg shadow-sm p-6 md:p-8">
                    {/* 기본 정보 */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">이름</label>
                            <input type="text" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">직무</label>
                            <input type="text" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">경력 (년차)</label>
                            <input type="number" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">프로필 이미지</label>
                            <label htmlFor="profile-image" className="group flex items-center justify-center w-full h-10 px-3 py-2 text-sm text-gray-500 border rounded-md cursor-pointer hover:bg-gray-50">
                                <FiUpload className="w-4 h-4 mr-2 text-gray-400" />
                                <span>{profileImageName || "이미지를 선택하세요"}</span>
                            </label>
                            <input
                                id="profile-image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                    </div>

                    {/* 희망 조건 */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">근무 형태</label>
                            <select className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                                <option>상주</option>
                                <option>원격</option>
                                <option>협의</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">희망 단가</label>
                            <input type="text" placeholder="예: 500만원/월" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">위치</label>
                            <input type="text" placeholder="예: 서울" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">가능 기간</label>
                            <input type="date" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>

                    {/* 자기소개 */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">한 줄 소개</label>
                            <input type="text" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">상세 소개</label>
                            <textarea rows={4} className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>


                    {/* 보유 기술 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">보유 기술</label>
                        <input type="text" placeholder="예: Spring, React, AWS" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    {/* 외부 링크 */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">GitHub</label>
                            <input type="url" placeholder="https://github.com/username" className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 pb-1">Notion</label>
                            <input type="url" placeholder="https://notion.so/..." className="w-full rounded-md border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>

                    {/* 첨부 파일 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">이력서 / 포트폴리오</label>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="attachments" className="group flex items-center justify-center w-full h-10 px-3 py-2 text-sm text-gray-500 border rounded-md cursor-pointer hover:bg-gray-50">
                                <FiUpload className="w-4 h-4 mr-2 text-gray-400" />
                                <span>파일을 선택하거나 드래그하여 첨부하세요</span>
                            </label>
                            <input
                                id="attachments"
                                type="file"
                                multiple
                                className="hidden"
                            />
                            {/* 선택된 파일 목록 표시 */}
                            <div className="flex flex-col gap-1 text-xs text-gray-600">
                                {attachmentNames.map((name, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-gray-100 p-1 rounded">
                                        <FiPaperclip className="w-3 h-3"/>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

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