"use client";

import { BsBookmark } from "react-icons/bs";

export interface RecommendedProjectCardProps {
    title: string;
    tags: string;
    price: string;
}

export default function RecommendedProjectCard({
    title,
    tags,
    price,
}: RecommendedProjectCardProps) {
    return (
        <div className="flex cursor-pointer items-end justify-between rounded-lg border bg-white p-4 shadow-sm transition duration-500 hover:shadow-md">
            <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{tags}</p>
                <p className="text-sm font-medium text-gray-700">예상 금액 : {price}</p>
            </div>
            <button className="flex-shrink-0 text-gray-400 hover:text-blue-600">
                <BsBookmark className="text-xl" />
            </button>
        </div>
    );
}