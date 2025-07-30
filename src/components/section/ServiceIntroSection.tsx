import React from "react";

export default function ServiceIntroSection(){
    return (
        <section className="flex flex-col gap-[50px] md:gap-[70px]">
            {/* 상단 소개 영역 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="flex flex-col gap-1.5 md:gap-2.5 items-center text-center">
                    <h1>
                        <div className="text-[20px] md:text-[30px] font-bold">
                            IT 전문가와 기업을<br />
                            가장 빠르게 연결하는 플랫폼
                        </div>
                    </h1>
                    <p className="text-[14px] md:text-[16px] font-normal text-gray-600">
                        스닙은 현업 중심의 데이터와 검증된 인재를 기반으로<br />
                        기업과 프리랜서 간 최적의 매칭을 실현하는 스마트 매칭 플랫폼입니다.
                    </p>
                </div>

                {/* CTA 카드 */}
                <div className="flex flex-col gap-2 justify-center items-center px-5 py-8 rounded-2xl border-[1px]">
                    <div className="text-gray-600 text-center">
                        원하는 서비스를 쉽고<br className="md:hidden"/> 간편하게 찾을 수 있어요!
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="flex justify-center gap-1">
                            <div className="px-4 rounded-lg border-[1px] py-2 font-semibold tracking-tight cursor-pointer">
                                프로젝트 둘러보기
                            </div>
                            <div className="px-4 rounded-lg border-[1px] py-2 font-semibold tracking-tight cursor-pointer">
                                이용 방법
                            </div>
                        </div>
                        <div className="px-11 rounded-lg border-[1px] py-2 font-semibold tracking-tight cursor-pointer">
                            기업용 맞춤 상담받기
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 통계 영역 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { value: "50명+", label: "알파테스터 참여자" },
                    { value: "100건+", label: "피드백 수집" },
                    { value: "2024년 4분기", label: "서비스 출시 예정" },
                    { value: "120시간+", label: "누적 개발 시간" },
                ].map((item, idx) => (
                    <div
                        key={item.label}
                        className={`flex flex-col gap-2 justify-center items-center ${
                            idx < 3 ? "md:border-r" : "md:border-none"
                        }`}
                    >
                        <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
                        <div className="text-m text-gray-600">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

