"use client";

import { HiOutlineBookmark } from 'react-icons/hi2';

/**
 * PartnerProfileCard 컴포넌트에서 사용하는 props의 타입 정의입니다.
 */
export type PartnerProfileProps = {
    /** 파트너의 이름 */
    name: string;
    /** 프로필 이미지 URL */
    imageUrl: string;
    /** 파트너 유형 ('개인' 또는 '팀') */
    type: '개인' | '팀';
    /** 근무 가능 형태 (예: "상주, 원격 모두 가능") */
    availability: string;
    /** 경력 연차 (숫자) */
    experienceYears: number;
    /** 직무 (예: "백엔드 개발자") */
    jobTitle: string;
    /** 참여한 프로젝트 개수 */
    projectCount: number;
    /** 프로필 카드에 표시될 한 줄 소개 */
    headline: string;
    /** 상세 자기소개. 3줄로 제한됩니다. */
    introduction: string;
    /** 보유 기술 목록 (문자열 배열) */
    skills: string[];
};

/**
 * 파트너의 프로필 정보를 표시하는 카드 컴포넌트입니다.
 * 이미지, 핵심 정보, 소개, 기술 스택 등을 포함합니다.
 */
export default function PartnerProfileCard({
    name,
    imageUrl,
    type,
    availability,
    experienceYears,
    jobTitle,
    projectCount,
    headline,
    introduction,
    skills,
}: PartnerProfileProps) {

    return (
        <article className="mt-8 w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm duration-500 hover:shadow-lg">
            <div className="flex flex-col md:flex-row">

                {/* 좌측 정보 영역: 프로필 이미지 */}
                <figure className="flex w-full items-center justify-center bg-gray-50/50 p-6 md:w-1/4">
                    <img
                        className="h-32 w-32 rounded-full object-cover shadow-md ring-4 ring-white"
                        src={imageUrl}
                        alt={`${name} 프로필 이미지`}
                    />
                </figure>

                {/* 우측 정보 영역 */}
                <div className="relative w-full space-y-3 p-8 md:w-3/4">
                    {/* 상단 정보: 이름, 유형, 북마크 */}
                    <div className="flex flex-wrap items-center justify-between gap-x-3 text-sm text-gray-500">
                        <div className={"flex"}>
                            <h2 className="pr-2 text-xl font-bold text-gray-800">{name}</h2>
                            <div className="flex items-center gap-1">
                                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">{type}</span>
                                <span className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">{availability}</span>
                            </div>
                        </div>
                        <button className="text-gray-400 transition-colors hover:text-gray-600">
                            <HiOutlineBookmark className="h-6 w-6" />
                        </button>
                    </div>

                    {/* 경력 정보 */}
                    <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-500">
                        <span className="font-semibold text-gray-800">{experienceYears}년 경력 {jobTitle}</span>
                        <span className="text-gray-300">|</span>
                        <span>{projectCount}개의 프로젝트 참여</span>
                    </div>

                    {/* 헤드라인 */}
                    <h3 className="pt-1 text-xl font-bold text-gray-900">
                        {headline}
                    </h3>

                    {/* 상세 소개 */}
                    <p className="leading-relaxed text-gray-600 line-clamp-3">
                        {introduction}
                    </p>

                    <ul className="flex flex-wrap items-center gap-2 pt-2">
                        {skills.map((skill) => (
                            <li key={skill} className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </article>
    );
}