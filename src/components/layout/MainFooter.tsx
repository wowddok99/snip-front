"use client";

export default function MainFooter() {

    return (
        <footer className="bg-[#12161E] py-10 tracking-tight">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
                <p>© {new Date().getFullYear()} 전상은. All rights reserved</p>
            </div>
        </footer>
    );
}
