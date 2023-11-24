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

    return (
        <div className="mt-2">
            {tasksList.tasks.map((task, index) => {
                return (
                    <div key={task.id} className="mb-1">
                        <input
                            type="checkbox"
                            id={task.id}
                            onChange={(event) => handleOnChange(event, index)}
                            checked={task.done}
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
