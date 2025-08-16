"use client";

export default function ProjectApplicationCard() {
    const handleApplyClick = () => {};

    return (
        <div className="w-full">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">이 프로젝트에 지원하시겠어요?</h3>
                <p className="mt-2 text-sm text-gray-600">
                    프로젝트가 마음에 드신다면<br />망설이지 말고 지원을 요청해 보세요.
                </p>
                <button
                    onClick={handleApplyClick}
                    className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white transition-colors hover:bg-blue-700"
                >
                    프로젝트 지원하기
                </button>
            </div>
        </div>
    );
}