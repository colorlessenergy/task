import { useState } from "react";

import { useTasksContext } from "@/app/_contexts/TasksContext";

const AddListForm = ({ setAddList }) => {
    const [list, setList] = useState("");
    const handleChange = (event) => {
        setList(event.currentTarget.value);
    };

    const { tasks, setTasks } = useTasksContext();
    const handleSubmit = (event) => {
        event.preventDefault();

        if (list === "") return;

        let cloneTasks = JSON.parse(JSON.stringify(tasks));
        cloneTasks.push({
            active: false,
            list,
            tasks: [],
        });

        localStorage.setItem("tasks", JSON.stringify(cloneTasks));

        setTasks(cloneTasks);
        setAddList(false);
    };

    return (
        <form onSubmit={handleSubmit} className="add-list-form">
            <label htmlFor="add-list">add list</label>
            <input
                type="text"
                id="add-list"
                value={list}
                onChange={handleChange}
                className="add-list-input mt-2"
            />

            <button className="add-list-button mt-2">add</button>
        </form>
    );
};

export default AddListForm;
