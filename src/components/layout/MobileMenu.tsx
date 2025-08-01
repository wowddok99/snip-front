type MobileMenuProps = {
    isOpen: boolean;
};

export default function MobileMenu({ isOpen }: MobileMenuProps) {
    return (
        <aside
            className={
                `transition-transform duration-[350ms] ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                md:hidden fixed right-0 inset-y-0 w-full
                bg-white shadow-lg z-20`
            }
        >
            <nav className="flex flex-col mt-[14px] gap-[14px] px-[25px] py-[68px] text-gray-600 font-extralight">
                <div className="cursor-pointer hover:text-black hover:font-light">프리랜서 찾기</div>
                <div className="cursor-pointer hover:text-black hover:font-light">프로젝트 찾기</div>
                <hr className="my-3 border-t border-gray-200" />
                <div className="cursor-pointer hover:text-black hover:font-light">프리랜서 등록</div>
                <div className="cursor-pointer hover:text-black hover:font-light">프로젝트 등록</div>
                <hr className="my-3 border-t border-gray-200" />
                <div className="cursor-pointer hover:text-black hover:font-light">홈</div>
                <hr className="my-3 border-t border-gray-200" />
                <div className="cursor-pointer hover:text-black hover:font-light">회원가입/로그인</div>
            </nav>
        </aside>
    );
}
