import { Roboto_Mono } from "next/font/google";
import "./_styles/globals.scss";

import { TasksContextProvider } from "./_contexts/TasksContext";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "tasks",
    description: "tasks",
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
