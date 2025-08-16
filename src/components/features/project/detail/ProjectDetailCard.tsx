"use client";

import {
    BsBookmark,
    BsWallet2,
    BsCalendarEvent,
    BsPeople,
    BsClock,
    BsGeoAlt,
} from "react-icons/bs";
import { ElementType } from "react";

interface ProjectDetailCardProps {
    title: string;
    details: { key: string; label: string; value: string }[];
    techStack: string[];
    sections: {
        title: string;
        type: "paragraph" | "list";
        content?: string;
        items?: string[];
    }[];
}

const detailIcons: Record<string, ElementType> = {
    budget: BsWallet2,
    startDate: BsCalendarEvent,
    role: BsPeople,
    duration: BsClock,
    location: BsGeoAlt,
    workTime: BsClock,
};

export default function ProjectDetailCard({
    title,
    details,
    techStack,
    sections,
}: ProjectDetailCardProps) {
    return (
        <article className="flex flex-col gap-6 rounded-lg border bg-white p-8 shadow-sm">

            {/* 제목 및 북마크 섹션 */}
            <header className="flex items-center justify-between">
                <h1 className="text-2xl font-bold leading-tight text-gray-900">
                    {title}
                </h1>
                <button className="flex-shrink-0 text-gray-400 hover:text-blue-600">
                    <BsBookmark className="text-xl" />
                </button>
            </header>

            {/* 상세 정보 섹션*/}
            <section className="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-gray-200 pt-6 md:grid-cols-2">
                {details.map((item) => {
                    const Icon = detailIcons[item.key];
                    return (
                        <div key={item.key} className="flex items-center gap-3">
                            <Icon className="h-5 w-5 flex-shrink-0 text-gray-500" />
                            <div className="flex-grow">
                                <dt className="text-sm text-gray-700">{item.label}</dt>
                                <dd className="text-sm font-semibold text-gray-800">
                                    {item.value}
                                </dd>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* 기술 스택 섹션 */}
            <section className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                        {tech}
                    </span>
                ))}
            </section>

            {/* 구분선 */}
            <hr className="border-gray-200" />

            {/* 프로젝트 소개 섹션 */}
            <section className="flex flex-col gap-6">
                {sections.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-lg font-semibold text-gray-900">
                            {section.title}
                        </h2>
                        {section.type === "paragraph" && (
                            <p className="pt-2 text-sm leading-relaxed text-gray-800">
                                {section.content}
                            </p>
                        )}
                        {section.type === "list" && (
                            <ul className="flex list-disc flex-col gap-1 pl-5 pt-2 text-sm text-gray-800">
                                {section.items?.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

        </article>
    );
}