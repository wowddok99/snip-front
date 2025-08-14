import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
            <body className={"bg-[#f9f9f9] min-h-screen"}>
                {children}
            </body>
        </html>
    );
}
