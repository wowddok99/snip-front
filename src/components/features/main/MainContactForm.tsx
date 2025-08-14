import React from 'react';

export default function MainContactForm() {

    const handleClick = () => {
        alert('문의가 접수되었습니다.');
    };

    return (

        <div className="max-w-xl w-full mx-auto mt-4">
            <div className="flex flex-col gap-4 text-left">
                <div>
                    <label htmlFor="name" className="sr-only">이름</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름을 입력하세요"
                        className="w-full bg-[#252a36] border border-gray-700 text-gray-300 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">이메일</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="답변 받으실 이메일 주소를 입력하세요"
                        className="w-full bg-[#252a36] border border-gray-700 text-gray-300 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">문의 내용</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="문의하실 내용을 자유롭게 입력해주세요."
                        className="w-full bg-[#252a36] border border-gray-700 text-gray-300 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleClick}
                        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        문의 보내기
                    </button>
                </div>
            </div>
        </div>
    );
}