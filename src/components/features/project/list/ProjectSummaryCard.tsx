"use client";

interface ProjectSummaryCardProps {
    title: string;
    techStack: string[];
    workType: string;
    budget: string;
    startDate: string;
    duration: string;
}

export default function ProjectSummaryCard({
    title,
    techStack,
    workType,
    budget,
    startDate,
    duration
}: ProjectSummaryCardProps) {
    return (
        <div className="flex flex-col gap-4 cursor-pointer rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md">

            {/* 제목 */}
            <h2 className="leading-snug text-lg font-semibold">{title}</h2>

            {/* 금액, 일정 */}
            <div className="flex flex-col gap-0.5 text-sm text-gray-600 md:flex-row md:gap-3">
                <p>
                    예상 금액 : {budget} <span className="text-xs text-gray-400">(월 단위)</span>
                </p>
                <span className="hidden md:inline text-gray-300">|</span>
                <p>
                    시작 예정일 : {startDate} <span className="text-xs text-gray-400">(협의 가능)</span>
                </p>
                <span className="hidden md:inline text-gray-300">|</span>
                <p>예상 기간 : {duration}</p>
            </div>

            {/* 기술 스택 및 근무 형태 */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-md bg-gray-100 px-2.5 py-1 font-semibold text-gray-600">
                    {workType}
                </span>
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-blue-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    );
}
