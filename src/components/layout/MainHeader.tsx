"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

type MainHeaderProps = {
    onToggleMenu: () => void;
};

export default function MainHeader({ onToggleMenu }: MainHeaderProps) {

    return (
        <header className="sticky top-0 z-20 bg-[#1F232A] bg-opacity-70 backdrop-blur-3xl border-b-[0.7px] border-none">
            <nav className="flex container max-w-5xl mx-auto justify-between items-center px-6 py-3">
                <div className="flex items-center gap-1 cursor-pointer text-white">
                    <Link href="/main" className="text-2xl font-bold tracking-tighter">snip</Link>
                </div>
                <div className="hidden md:flex gap-7 items-center font-light">
                    <div className="flex gap-5 items-center text-gray-300">
x                        <Link href="/partner/list" className="cursor-pointer hover:text-white">프리랜서 찾기</Link>
                        <Link href="/project/list" className="cursor-pointer hover:text-white">프로젝트 찾기</Link>
                        <Link href="/partner/new" className="cursor-pointer hover:text-white">프리랜서 등록</Link>
                        <Link href="/project/new" className="cursor-pointer hover:text-white">프로젝트 등록</Link>
                    </div>
                    <div className="flex gap-2">
                        <Link href="/login" className="flex items-center justify-center bg-none border-gray-400 border-[0.5px] text-[14px] text-white font-bold py-1.5 px-4 rounded-[4px] cursor-pointer hover:bg-white hover:text-gray-700">
                            로그인
                        </Link>
                    </div>
                </div>
                <RxHamburgerMenu
                    onClick={onToggleMenu}
                    className="md:hidden text-gray-300 text-[20px] cursor-pointer"
                />
            </nav>
        </header>
    );
}
