import { RxCross2 } from "react-icons/rx";

type MainMobileMenuProps = {
    isOpen: boolean;
    onToggleMenu: () => void;
};

export default function MainMobileMenu({ isOpen, onToggleMenu }: MainMobileMenuProps) {
    return (
        <aside
            className={
                `transition-transform duration-[350ms] ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                md:hidden fixed right-0 inset-y-0 w-full
                bg-[#171c26] shadow-2xl z-20`
            }
        >
            <div className="absolute top-3 right-6">
                <RxCross2
                    onClick={onToggleMenu}
                    className="text-gray-300 text-[28px] cursor-pointer"
                />
            </div>

            <nav className="flex flex-col mt-[14px] gap-[14px] px-[25px] py-[68px] text-gray-300 font-light">
                <div className="cursor-pointer hover:text-white hover:font-light">프리랜서 찾기</div>
                <div className="cursor-pointer hover:text-white hover:font-light">프로젝트 찾기</div>
                <hr className="my-3 border-t border-gray-700" />
                <div className="cursor-pointer hover:text-white hover:font-light">프리랜서 등록</div>
                <div className="cursor-pointer hover:text-white hover:font-light">프로젝트 등록</div>
                <hr className="my-3 border-t border-gray-700" />
                <div className="cursor-pointer hover:text-white hover:font-light">홈</div>
                <hr className="my-3 border-t border-gray-700" />
                <div className="cursor-pointer hover:text-white hover:font-light">회원가입/로그인</div>
            </nav>
        </aside>
    );
}