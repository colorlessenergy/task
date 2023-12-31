"use client";

import { useEffect, useState } from "react";

import AddTaskInput from "./_components/AddTaskInput";
import Tasks from "./_components/Tasks";
import Modal from "./_components/Modal/Modal";
import List from "./_components/Lists";
import { useTasksContext } from "./_contexts/TasksContext";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
    };

    const { tasks } = useTasksContext();
    const activeTasksList = tasks.find((list) => list.active);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            "serviceWorker" in navigator &&
            window.workbox !== undefined
        ) {
            const wb = window.workbox;
            const installNewVersion = () => {
                wb.addEventListener("controlling", () => {
                    window.location.reload();
                });

                wb.messageSkipWaiting();
            };

            wb.addEventListener("waiting", installNewVersion);
            wb.register();
        }
    }, []);

    return (
        <div>
            <nav>
                <button className="button-svg mr-1" onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5ZM14.9352 7.20369L8.93524 4.20369L4 6.31879V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V5.03308L14.9352 7.20369Z"></path>
                    </svg>
                </button>

                {activeTasksList?.list}
            </nav>

            <AddTaskInput />

            <Tasks />

            <Modal isOpen={isOpen} toggleModal={toggleModal}>
                <List toggleModal={toggleModal} />
            </Modal>
        </div>
    );
}
