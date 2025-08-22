"use client";

import { SVGProps } from "react";
import { RiKakaoTalkFill, RiAppleFill } from "react-icons/ri";
import Link from "next/link";

const GoogleLogoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" {...props}>
        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c22.69-21.033 35.891-53.36 35.891-91.808z" />
        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.772-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1z" />
        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782z" />
        <path fill="#EB4335" d="M130.55 50.479c19.205 0 36.344 6.698 50.073 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251z" />
    </svg>
);


export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            {/* 로그인 박스 */}
            <main className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">

                {/* 헤더 섹션 */}
                <section className="text-center pb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        로그인
                    </h1>
                    <p className="pt-2 text-gray-500">
                        Snip에서 당신의 아이디어를 함께<br/> 실현할 파트너를 만나보세요.
                    </p>
                </section>

                {/* OAuth 로그인 버튼 섹션 */}
                <div className="flex flex-col gap-3">
                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium bg-[#FEE500] text-black">
                        <RiKakaoTalkFill size={20} />
                        카카오 계정으로 시작하기
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium bg-black text-white">
                        <RiAppleFill size={20} />
                        애플 계정으로 시작하기
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-lg font-medium bg-white text-gray-700">
                        <GoogleLogoIcon className="w-[18px] h-[18px]" />
                        구글 계정으로 시작하기
                    </button>
                </div>

                {/* 구분선 섹션 */}
                <section className="relative flex items-center py-8">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink px-4 text-sm text-gray-400">또는</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </section>

                {/* 로그인 폼 섹션 */}
                <form className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 pb-2 block">아이디 (이메일)</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="이메일을 입력해주세요."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 pb-2 block">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 mt-5"
                    >
                        로그인
                    </button>
                </form>

                {/* 회원가입 & 비밀번호 찾기 링크 섹션 */}
                <section className="pt-6 text-center text-sm text-gray-500 font-medium">
                    <Link href="/sign-up" className="hover:underline">회원가입</Link>
                    <span className="px-2">|</span>
                    <a href="#" className="hover:underline">비밀번호를 잊으셨나요?</a>
                </section>

            </main>
        </div>
    );
}
