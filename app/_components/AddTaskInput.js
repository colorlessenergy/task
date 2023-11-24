"use client";

import { useState } from "react";

import { useTasksContext } from "../_contexts/TasksContext";

const AddTaskInput = () => {
    const [task, setTask] = useState("");
    const handleChange = (event) => {
        setTask(event.currentTarget.value);
    };

    const { tasks, setTasks, id, setId } = useTasksContext();
    const tasksListIndex = tasks.findIndex((list) => list.active);

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            let cloneTasks = JSON.parse(JSON.stringify(tasks));
            cloneTasks[tasksListIndex].tasks.push({
                id: id + 1,
                task: task,
                done: false,
            });

            localStorage.setItem("tasks", JSON.stringify(cloneTasks));
            localStorage.setItem("id", id + 1);

            setTasks(cloneTasks);
            setId((previousId) => previousId + 1);

            event.currentTarget.value = "";
        }
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            className="add-task-input mt-2"
        />
    );
};

export default AddTaskInput;
