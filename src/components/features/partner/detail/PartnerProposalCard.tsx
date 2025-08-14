"use client";

export default function PartnerProposalCard() {
    const handleProposeClick = () => {};

    return (
        <div className="w-full md:w-1/3">
            <div className="sticky top-10 rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">해당 프리랜서에게 제안하시겠어요?</h3>
                <p className="mt-2 text-sm text-gray-600">
                    프리랜서가 제안을 수락하면<br />1:1 대화가 시작됩니다.
                </p>
                <button
                    onClick={handleProposeClick}
                    className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white transition-colors hover:bg-blue-700"
                >
                    프로젝트 제안하기
                </button>
            </div>
        </div>
    );
}