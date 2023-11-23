"use client";

import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            active: true,
            list: "personal",
            tasks: [
                {
                    id: 0,
                    task: "drink water",
                    done: false,
                },
                {
                    id: 1,
                    task: "read",
                    done: false,
                },
            ],
        },
    ]);

    const [id, setId] = useState(2);

    return (
        <TasksContext.Provider value={{ tasks, setTasks, id, setId }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => useContext(TasksContext);
