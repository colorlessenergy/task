"use client";

import { useTasksContext } from "../_contexts/TasksContext";

const Tasks = () => {
    const { tasks } = useTasksContext();
    const tasksList = tasks.find((list) => list.active);

    return (
        <div className="mt-2">
            {tasksList.tasks.map((task) => {
                return (
                    <div key={task.id} className="mb-1">
                        <input
                            type="checkbox"
                            id={task.id}
                            className="d-none"
                        />
                        <label htmlFor={task.id} className="mr-1"></label>
                        <label htmlFor={task.id} className="task">
                            {task.task}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default Tasks;
