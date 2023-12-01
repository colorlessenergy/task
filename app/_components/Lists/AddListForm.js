import { useEffect, useRef, useState } from "react";

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

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <button
                onClick={() => setAddList(false)}
                className="back-button mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </svg>
                lists
            </button>

            <form onSubmit={handleSubmit} className="list-form">
                <label htmlFor="add-list">add list</label>
                <input
                    type="text"
                    id="add-list"
                    value={list}
                    onChange={handleChange}
                    ref={inputRef}
                    className="list-form-input mt-2"
                />

                <button className="list-form-button list-form-button-green mt-2">
                    add
                </button>
            </form>
        </div>
    );
};

export default AddListForm;
