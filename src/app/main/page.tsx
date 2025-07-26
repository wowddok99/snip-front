"use client"

import { RxHamburgerMenu } from "react-icons/rx";
import { FaConnectdevelop } from "react-icons/fa";
import { useState } from "react";
export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <body className={"bg-white"}>
            <header className={""}>
                <nav className={"flex container max-w-5xl mx-auto justify-between items-center px-6 py-3"}>
                    <div className={"flex items-center gap-1 z-10 cursor-pointer"}>
                        <FaConnectdevelop className={"text-[27px] animate-[spin_7s_linear_infinite]"}/>
                        <div className={"text-2xl font-bold"}>Devit</div>
                    </div>
                    <div className={"hidden md:flex gap-7 items-center"}>
                        <div className={"flex gap-3 items-center"}>
                            <div className={"cursor-pointer"}>프리랜서 찾기</div>
                            <div className={"cursor-pointer"}>프로젝트 찾기</div>
                            <div className="w-[0.7px] h-5 bg-gray-300 mx-2" />
                            <div className={"cursor-pointer"}>프리랜서 등록</div>
                            <div className={"cursor-pointer"}>프로젝트 등록</div>
                        </div>
                        <div className={"flex gap-2"}>
                            <div className={"flex items-center justify-center bg-black text-[14px] text-white font-bold py-1.5 px-4 rounded-full"}>로그인</div>
                        </div>
                    </div>
                    <RxHamburgerMenu onClick={toggleMenu} className={"md:hidden text-[20px] cursor-pointer z-10"}/>
                </nav>
            </header>

            {/* Menu Side Bar(Mobile) */}
            <aside className={`
                transition-transform duration-[350ms] ease-in-out 
                ${menuOpen ? 'translate-x-0' : 'translate-x-full '} 
                md:hidden fixed right-0 inset-y-0 w-full 
                bg-white shadow-lg`
                }
            >
                <nav className={"flex flex-col gap-3.5 px-[25px] py-[68px]"}>
                    <div className={"cursor-pointer"}>프리랜서 찾기</div>
                    <div className={"cursor-pointer"}>프로젝트 찾기</div>
                    <hr className="my-3 border-t border-gray-200" />
                    <div className={"cursor-pointer"}>프리랜서 등록</div>
                    <div className={"cursor-pointer"}>프로젝트 등록</div>
                    <hr className="my-3 border-t border-gray-200" />
                    <div className={"cursor-pointer"}>홈</div>
                    <hr className="my-3 border-t border-gray-200" />
                    <div className={"text-gray-500 cursor-pointer"}>회원가입/로그인</div>
                </nav>
            </aside>
        </body>
    )
}
