"use client";

import { useTasksContext } from "../_contexts/TasksContext";

const Tasks = () => {
    const { tasks, setTasks } = useTasksContext();
    const tasksList = tasks.find((list) => list.active);
    const tasksListIndex = tasks.findIndex((list) => list.active);

    const handleOnChange = (event, index) => {
        let cloneTasks = JSON.parse(JSON.stringify(tasks));
        cloneTasks[tasksListIndex].tasks[index].done =
            event.currentTarget.checked;

        localStorage.setItem("tasks", JSON.stringify(cloneTasks));

        setTasks(cloneTasks);
    };

    const handleOnDelete = (index) => {
        let cloneTasks = JSON.parse(JSON.stringify(tasks));
        cloneTasks[tasksListIndex].tasks.splice(index, 1);

        localStorage.setItem("tasks", JSON.stringify(cloneTasks));

        setTasks(cloneTasks);
    };

    return (
        <div className="mt-2">
            {tasksList?.tasks.map((task, index) => {
                return (
                    <div key={task.id} className="task mb-1">
                        <div className="task-form">
                            <input
                                type="checkbox"
                                id={task.id}
                                onChange={(event) =>
                                    handleOnChange(event, index)
                                }
                                checked={task.done}
                                className="d-none"
                            />
                            <label htmlFor={task.id} className="mr-1"></label>
                            <label htmlFor={task.id} className="task">
                                {task.task}
                            </label>
                        </div>

                        <button
                            onClick={() => {
                                handleOnDelete(index);
                            }}
                            className="button-svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                            </svg>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Tasks;
