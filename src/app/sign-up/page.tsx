"use client";

import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            {/* 회원가입 박스 */}
            <main className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">

                {/* 헤더 섹션 */}
                <section className="text-center pb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        회원가입
                    </h1>
                    <p className="pt-2 text-gray-500">
                        Snip에서 당신의 아이디어를 함께<br /> 실현할 파트너를 만나보세요.
                    </p>
                </section>

                {/* 회원가입 폼 섹션 */}
                <form className="flex flex-col gap-5">

                    {/* 이메일 입력 */}
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 pb-2 block">이메일</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="이메일을 입력해주세요."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 비밀번호 입력 */}
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 pb-2 block">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 비밀번호 확인 */}
                    <div>
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 pb-2 block">비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="비밀번호를 다시 한번 입력해주세요."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 이름 입력 */}
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 pb-2 block">이름</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="이름을 입력해주세요."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 생년월일 입력 */}
                    <div>
                        <label htmlFor="birthdate" className="text-sm font-medium text-gray-700 pb-2 block">생년월일</label>
                        <input
                            type="text"
                            id="birthdate"
                            placeholder="생년월일 8자리 (예: 19990822)"
                            maxLength={8}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* 통신사 선택 */}
                    <div>
                        <label htmlFor="carrier" className="text-sm font-medium text-gray-700 pb-2 block">통신사</label>
                        <div className="relative">
                            <select
                                id="carrier"
                                className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-10
                                text-gray-700 invalid:text-gray-400"
                                defaultValue=""
                                required={true}
                            >
                                <option value="" disabled hidden>통신사를 선택해주세요</option>
                                <option value="SKT">SKT</option>
                                <option value="KT">KT</option>
                                <option value="LGU+">LG U+</option>
                                <option value="SKT_MVNO">SKT 알뜰폰</option>
                                <option value="KT_MVNO">KT 알뜰폰</option>
                                <option value="LGU+_MVNO">LGU+ 알뜰폰</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                <FaAngleDown className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* 전화번호 입력 */}
                    <div>
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 pb-2 block">전화번호</label>
                        <div className="flex flex-col xs:flex-row gap-2">
                            <input
                                type="tel"
                                id="phone"
                                placeholder="'-'를 제외한 숫자만 입력해주세요."
                                className="flex-grow px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type="button" className="flex-shrink-0 px-4 py-3 text-sm font-semibold bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                인증요청
                            </button>
                        </div>
                    </div>

                    {/* 인증번호 입력 */}
                    <div>
                        <label htmlFor="verificationCode" className="text-sm font-medium text-gray-700 pb-2 block">인증번호</label>
                        <div className="flex flex-col xs:flex-row gap-2">
                            <input
                                type="text"
                                id="verificationCode"
                                placeholder="인증번호 6자리를 입력해주세요."
                                className="flex-grow px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type="button" className="flex-shrink-0 px-4 py-3 text-sm font-semibold bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                확인
                            </button>
                        </div>
                    </div>

                    {/* 회원가입 버튼 */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5"
                        >
                            회원가입
                        </button>
                    </div>

                </form>

                {/* 로그인 링크 섹션 */}
                <section className="pt-6 text-center text-sm text-gray-500 font-medium">
                    <span>이미 계정이 있으신가요? </span>
                    <Link href="/login" className="text-blue-600 hover:underline">
                        로그인
                    </Link>
                </section>

            </main>
        </div>
    );
}
