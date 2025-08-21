"use client";

import { BsArrowRight } from "react-icons/bs";

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
        <div className="group cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-slate-800">{title}</h4>
                    <p className="text-sm text-slate-500">{tags}</p>
                    <p className="text-sm font-semibold text-gray-600">
                        예상 금액: {price}
                    </p>
                </div>
            </div>
        </div>
    );
}