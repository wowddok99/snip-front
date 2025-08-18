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
        <div className="group cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:ring-2 hover:ring-blue-500">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-slate-800">{title}</h4>
                    <p className="text-sm text-slate-500">{tags}</p>
                    <p className="text-sm font-semibold text-gray-600">
                        예상 금액: {price}
                    </p>
                </div>
                <BsArrowRight className="text-xl text-slate-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
        </div>
    );
}