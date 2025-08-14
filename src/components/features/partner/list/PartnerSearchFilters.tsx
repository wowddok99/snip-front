"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export default function PartnerSearchFilters() {

    return (
        <div className="flex flex-col gap-[10px] justify-center items-start">

            <div>
                <h2 className="text-3xl font-medium mb-2 tracking-tighter">프리랜서 찾기</h2>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row gap-2 w-full text-[15px]">
                <div className="
                    flex flex-1 items-center gap-2 bg-white py-[7px] rounded-lg
                    border-[2px] border-gray-300 hover:border-gray-800
                    transition-colors duration-200
                    col-span-2"
                >
                    <IoSearchOutline className="ml-[10px] text-gray-500" />
                    <input
                        type="text"
                        className="flex-1 bg-transparent outline-none text-gray-900 pr-4"
                        placeholder="주요 업무, 스킬 등을 검색해보세요"
                    />
                </div>
                <div className="flex items-center gap-1 bg-white text-gray-500 py-[7px] px-[15px] rounded-lg border-[2px] border-gray-300 hover:border-gray-800 transition-colors duration-200">
                    <div className="flex items-center gap-1">
                        <div>필터</div>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className="flex items-center gap-1 bg-white text-gray-500 py-[7px] px-[15px] rounded-lg border-[2px] border-gray-300 hover:border-gray-800 transition-colors duration-200">
                    <div className="flex items-center gap-1">
                        <div>관련 기술</div>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className="flex items-center gap-1 bg-white text-gray-500 py-[7px] px-[15px] rounded-lg border-[2px] border-gray-300 hover:border-gray-800 transition-colors duration-200">
                    <div>근무 형태</div>
                    <IoMdArrowDropdown />
                </div>
                <div className="flex items-center gap-1 bg-white text-gray-500 py-[7px] px-[15px] rounded-lg border-[2px] border-gray-300 hover:border-gray-800 transition-colors duration-200">
                    <div>숙련도</div>
                    <IoMdArrowDropdown />
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200 mt-3" />

        </div>
    );
}
