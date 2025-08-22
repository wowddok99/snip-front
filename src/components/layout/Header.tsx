"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

type HeaderProps = {
    onToggleMenu: () => void;
};

export default function Header({ onToggleMenu }: HeaderProps) {

    return (
        <header className={"sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b-[0.7px]"}>
            <nav className="flex container max-w-5xl mx-auto justify-between items-center px-6 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                    <Link href="/main" className="text-2xl font-bold tracking-tighter">snip</Link>
                </div>
                <div className="hidden md:flex gap-7 items-center font-light">
                    <div className="flex gap-5 items-center text-gray-600">
                        <Link href="/partner/list" className="cursor-pointer hover:text-black hover:font-light">프리랜서 찾기</Link>
                        <Link href="/project/list" className="cursor-pointer hover:text-black hover:font-light">프로젝트 찾기</Link>
                        <Link href="/partner/new" className="cursor-pointer hover:text-black hover:font-light">프리랜서 등록</Link>
                        <Link href="/project/new" className="cursor-pointer hover:text-black hover:font-light">프로젝트 등록</Link>
                    </div>
                    <div className="flex gap-2">
                        <Link href="/login" className="flex items-center justify-center bg-black border border-transparent text-[14px] text-white font-bold py-1.5 px-4 rounded-[4px] cursor-pointer hover:bg-white hover:border-black hover:text-gray-700">
                        로그인
                        </Link>
                    </div>
                </div>
                <RxHamburgerMenu
                    onClick={onToggleMenu}
                    className="md:hidden text-[20px] cursor-pointer"
                />
            </nav>
        </header>
    );
}

