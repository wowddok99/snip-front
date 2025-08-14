import { MdOutlineFileDownload } from "react-icons/md";

interface ResumeFile {
    name: string;
    url: string;
}

interface Project {
    id: number;
    company: string;
    role: string;
    title: string;
    period: string;
    description: string;
}

interface PartnerProfileCardProps {
    name: string;
    imageUrl: string;
    jobTitle: string;
    experienceYears: number;
    projectCount: number;
    desiredConditions: {
        type: string;
        availability: string;
    };
    headline: string;
    introduction: string;
    skills: string[];
    links: {
        github: string;
    };
    resumeFiles: ResumeFile[];
    projects: Project[];
}

export default function PartnerProfileCard({
    name,
    imageUrl,
    jobTitle,
    experienceYears,
    projectCount,
    desiredConditions,
    headline,
    introduction,
    skills,
    links,
    resumeFiles,
    projects,
}: PartnerProfileCardProps) {

    return (
        <div className="flex w-full flex-col gap-10 rounded-lg border bg-white p-6 md:w-2/3">

            {/* 프로필 섹션 */}
            <section className="flex flex-col items-center gap-6 md:flex-row">
                <img
                    src={imageUrl}
                    alt={`${name} 프로필 사진`}
                    className="h-24 w-24 flex-shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                        <div className="flex items-center gap-1">
                            <span className="rounded-md bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                                {desiredConditions.type}
                            </span>
                            <span className="rounded-md bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                                {desiredConditions.availability}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-x-3 text-sm text-gray-500">
                        <span className="font-semibold text-gray-800">
                            {experienceYears}년 경력 {jobTitle}
                        </span>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <span>{projectCount}개의 프로젝트 참여</span>
                    </div>
                </div>
            </section>

            {/* 상세 소개 섹션 */}
            <section>
                <h3 className="mb-4 border-b pb-2 text-xl font-bold">상세 소개</h3>
                <h4 className="text-lg font-medium text-gray-900">{headline}</h4>
                <p className="whitespace-pre-line pt-3 leading-relaxed text-gray-700">
                    {introduction}
                </p>
            </section>

            {/* 이력서/포트폴리오 섹션 */}
            <section>
                <h3 className="mb-4 border-b pb-2 text-xl font-bold text-gray-800">
                    이력서/포트폴리오
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {resumeFiles.map((file, index) => (
                        <a
                            key={index}
                            className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-gray-50"
                        >
                            <span className="font-medium text-sm text-gray-700">{file.name}</span>
                            <MdOutlineFileDownload className="h-5 w-5 text-gray-500" />
                        </a>
                    ))}
                </div>
            </section>

            {/* 스킬 섹션 */}
            <section>
                <h3 className="mb-4 border-b pb-2 text-xl font-bold">스킬</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* 프로젝트 경력 섹션 */}
            <section>
                <h3 className="mb-4 border-b pb-2 text-xl font-bold">프로젝트 경력</h3>
                <div className="space-y-8">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <p className="font-bold text-gray-800">{project.title}</p>
                            <p className="py-1 text-sm text-gray-500">
                                {project.period} | {project.company}
                            </p>
                            <p className="text-sm text-gray-700">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 근무 경력 섹션 */}
            <section>
                <h3 className="mb-4 border-b pb-2 text-xl font-bold">근무 경력</h3>
                <ul className="space-y-4">
                    {projects.map((project) => (
                        <li key={project.id} className="flex items-center">
                            <div>
                                <p className="font-semibold text-gray-800">{project.role}</p>
                                <p className="text-sm text-gray-600">
                                    {project.company} · {project.period}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 링크 섹션 */}
            <section>
                <h3 className="mb-4 border-b pb-2 text-xl font-bold">링크</h3>
                <div className="flex flex-col gap-3 text-sm">
                    <a
                        href={links.github}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                    >
                        {links.github}
                    </a>
                </div>
            </section>

        </div>
    );
}
