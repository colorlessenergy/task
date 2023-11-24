"use client";

import { createContext, useContext, useState } from "react";

import {
    getIdFromlocalStorage,
    getTasksFromLocalStorage,
} from "../_utilities/tasks";

const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage());

    const [id, setId] = useState(getIdFromlocalStorage());

    return (
        <TasksContext.Provider value={{ tasks, setTasks, id, setId }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => useContext(TasksContext);
