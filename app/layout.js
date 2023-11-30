import { Roboto_Mono } from "next/font/google";
import "./_styles/globals.scss";

import { TasksContextProvider } from "./_contexts/TasksContext";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://tasks-list1.vercel.app"),
    title: "tasks",
    description: "tasks",
    applicationName: "tasks",
    openGraph: {
        title: "tasks",
        description: "tasks",
        siteName: "tasks",
        type: "website",
    },
    manifest: "/manifest.json",
};

export const viewport = {
    themeColor: "#28293F",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${robotoMono.className} container`}>
                <TasksContextProvider>{children}</TasksContextProvider>
            </body>
        </html>
    );
}
