import { Roboto_Mono } from "next/font/google";
import "./styles/globals.scss";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "tasks",
    description: "tasks",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>{children}</body>
        </html>
    );
}
