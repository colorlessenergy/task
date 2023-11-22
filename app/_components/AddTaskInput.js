"use client";

import { useState } from "react";

const AddTaskInput = () => {
    const [task, setTask] = useState("");
    const handleChange = (event) => {
        setTask(event.currentTarget.value);
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            className="add-task-input mt-2"
        />
    );
};

export default AddTaskInput;
