import { useTasksContext } from "@/app/_contexts/TasksContext";

const EditListForm = ({ editList, setEditList }) => {
    const handleChange = (event) => {
        setEditList({
            ...editList,
            list: event.currentTarget.value,
        });
    };

    const { tasks, setTasks } = useTasksContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editList.list === "") return;

        let cloneTasks = JSON.parse(JSON.stringify(tasks));
        cloneTasks[editList.index] = {
            active: editList.active,
            list: editList.list,
            tasks: editList.tasks,
        };

        localStorage.setItem("tasks", JSON.stringify(cloneTasks));

        setTasks(cloneTasks);
        setEditList(false);
    };

    const handleDelete = () => {
        let cloneTasks = JSON.parse(JSON.stringify(tasks));
        cloneTasks.splice(editList.index, 1);

        localStorage.setItem("tasks", JSON.stringify(cloneTasks));

        setTasks(cloneTasks);
        setEditList(false);
    };

    return (
        <div>
            <button
                onClick={() => setEditList(false)}
                className="back-button mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </svg>
                lists
            </button>

            <form onSubmit={handleSubmit} className="list-form">
                <label htmlFor="edit-list">edit list</label>
                <input
                    type="text"
                    id="edit-list"
                    onChange={handleChange}
                    value={editList.list}
                    className="list-form-input mt-2"
                />

                <button className="list-form-button list-form-button-blue mt-2">
                    edit
                </button>

                <button
                    onClick={handleDelete}
                    type="button"
                    className="list-form-button list-form-button-red mt-2">
                    delete
                </button>
            </form>
        </div>
    );
};

export default EditListForm;
