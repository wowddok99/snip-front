"use client";

import { HiOutlineBookmark } from 'react-icons/hi2';

export interface PartnerProfileCardData {
    name: string;
    imageUrl: string;
    desiredConditions: {
        type: '개인' | '팀';
        availability: string;
    };
    experienceYears: number;
    jobTitle: string;
    projectCount: number;
    headline: string;
    introduction: string;
    skills: string[];
}

interface PartnerProfileCardProps {
    data: PartnerProfileCardData;
}

export default function PartnerProfileCard({ data }: PartnerProfileCardProps) {

    return (
        <article className="mt-8 w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm duration-500 hover:shadow-lg">
            <div className="flex flex-col md:flex-row">

                {/* 프로필 이미지 섹션 */}
                <figure className="flex w-full items-center justify-center bg-gray-50/50 p-6 md:w-1/4">
                    <img
                        className="h-32 w-32 rounded-full object-cover shadow-md ring-4 ring-white"
                        src={data.imageUrl}
                        alt={`${data.name} 프로필 이미지`}
                    />
                </figure>

                {/* 정보 섹션 */}
                <div className="w-full flex flex-col gap-3 p-8 md:w-3/4">
                    {/* 상단 정보 */}
                    <div className="flex flex-wrap items-center justify-between gap-x-3 text-sm text-gray-500">
                        <div className="flex">
                            <h2 className="pr-2 text-xl font-bold text-gray-800">{data.name}</h2>
                            <div className="flex items-center gap-1">
                                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
                                    {data.desiredConditions.type}
                                </span>
                                <span className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                                    {data.desiredConditions.availability}
                                </span>
                            </div>
                        </div>
                        <button className="text-gray-400 transition-colors hover:text-gray-600">
                            <HiOutlineBookmark className="h-6 w-6" />
                        </button>
                    </div>

                    {/* 경력 정보 */}
                    <div className="flex flex-col md:flex-row md:items-center gap-x-3 text-sm text-gray-500">
                        <span className="font-semibold text-gray-800">
                            {data.experienceYears}년 경력 {data.jobTitle}
                        </span>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <span>{data.projectCount}개의 프로젝트 참여</span>
                    </div>

                    {/* 헤드라인 */}
                    <h3 className="pt-1 text-xl font-bold text-gray-900">{data.headline}</h3>

                    {/* 상세 소개 */}
                    <p className="leading-relaxed text-gray-600 line-clamp-3">
                        {data.introduction}
                    </p>

                    {/* 스킬 */}
                    <ul className="flex flex-wrap items-center gap-2 pt-2">
                        {data.skills.map((skill) => (
                            <li
                                key={skill}
                                className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </article>
    );
}
