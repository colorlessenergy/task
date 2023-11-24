"use client";

import { createContext, useContext, useEffect, useState } from "react";

import {
    getIdFromlocalStorage,
    getTasksFromLocalStorage,
} from "../_utilities/tasks";

const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState(null);

    const [id, setId] = useState(null);

    useEffect(() => {
        setTasks(getTasksFromLocalStorage());
        setId(getIdFromlocalStorage());
    }, []);

    if (!tasks && !id) return;

    return (
        <TasksContext.Provider value={{ tasks, setTasks, id, setId }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => useContext(TasksContext);
