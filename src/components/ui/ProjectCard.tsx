import React from "react";
import { CiHeart } from "react-icons/ci";

interface ProjectCard {
    dueDate: string;
    title: string;
    tags: string[];
    location: string;
    level: string;
    duration: string;
    cost: string;
    likes: number;
}

export default function ProjectCard({
    dueDate,
    title,
    tags,
    location,
    level,
    duration,
    cost,
    likes,
}: ProjectCard) {
    return (
        <div className="flex flex-col gap-2 border px-6 py-7 rounded-xl hover:border-blue-400 transition-colors duration-300 cursor-pointer">
            {/* 마감 날짜 */}
            <div className="flex items-center justify-between">
                <div className="px-[7px] py-[4px] rounded-lg border-none bg-[#297be6] text-white text-[12px] tracking-normal">
                    {dueDate}
                </div>
                <div className="flex items-center gap-[2px]">
                    <CiHeart className="text-[24px] text-gray-400" />
                    <div className="font-bold">{likes}</div>
                </div>
            </div>

            {/* 제목 */}
            <div className="font-bold text-lg tracking-tighter">{title}</div>

            {/* 개발 스택 태그 */}
            <div className="flex flex-wrap w-full tracking-tighter gap-x-[2px] gap-y-[3px]">
                {tags.map((tag) => (
                    <div
                        key={tag}
                        className="bg-[#f0f7ff] text-[#297be6] px-3 py-1 rounded-xl text-[13px] font-medium"
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* 상세 정보 */}
            <div className="flex flex-col mt-4 gap-[1px] tracking-tighter">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-[4px]">
                        <div className="text-gray-400 text-[13px]">위치</div>
                        <div className="font-bold text-[13px]">{location}</div>
                    </div>
                    <span className="w-px h-3 bg-gray-300"></span>
                    <div className="flex gap-[4px]">
                        <div className="text-gray-400 text-[13px]">등급</div>
                        <div className="font-bold text-[13px]">{level}</div>
                    </div>
                    <span className="w-px h-3 bg-gray-300"></span>
                    <div className="flex gap-[4px]">
                        <div className="text-gray-400 text-[13px]">기간</div>
                        <div className="font-bold text-[13px]">{duration}</div>
                    </div>
                    <span className="w-px h-3 bg-gray-300"></span>
                </div>
                <div className="flex gap-[4px]">
                    <div className="text-gray-400 text-[13px]">월 단가</div>
                    <div className="font-bold text-[13px]">{cost}</div>
                </div>
            </div>
        </div>
    );
}
