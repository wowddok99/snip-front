import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

type MobileMenuProps = {
    isOpen: boolean;
    onToggleMenu: () => void;
};

export default function MobileMenu({ isOpen, onToggleMenu }: MobileMenuProps) {

    return (
        <aside
            className={
                `transition-transform duration-[350ms] ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                md:hidden fixed right-0 inset-y-0 w-full
                bg-white shadow-lg z-20`
            }
        >
            <div className="absolute top-3 right-6">
                <RxCross2
                    onClick={onToggleMenu}
                    className="text-gray-300 text-[28px] cursor-pointer"
                />
            </div>
            <nav className="flex flex-col mt-[14px] gap-[14px] px-[25px] py-[68px] text-gray-600 font-extralight">
                <Link href="/partner/list" className="cursor-pointer hover:text-black hover:font-light">프리랜서 찾기</Link>
                <Link href="/project/list" className="cursor-pointer hover:text-black hover:font-light">프로젝트 찾기</Link>
                <hr className="my-3 border-t border-gray-200" />
                <Link href="/partner/new" className="cursor-pointer hover:text-black hover:font-light">프리랜서 등록</Link>
                <Link href="/project/new" className="cursor-pointer hover:text-black hover:font-light">프로젝트 등록</Link>
                <hr className="my-3 border-t border-gray-200" />
                <Link href="/main" className="cursor-pointer hover:text-black hover:font-light">홈</Link>
                <hr className="my-3 border-t border-gray-200" />
                <Link href="/login" className="cursor-pointer hover:text-black hover:font-light">회원가입/로그인</Link>
            </nav>
        </aside>
    );
}
