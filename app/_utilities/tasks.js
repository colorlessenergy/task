export const getTasksFromLocalStorage = () => {
    if (!localStorage.getItem("tasks")) {
        localStorage.setItem(
            "tasks",
            JSON.stringify([
                {
                    active: true,
                    list: "personal",
                    tasks: [
                        {
                            id: 0,
                            task: "drink water",
                            done: false,
                        },
                        {
                            id: 1,
                            task: "read",
                            done: false,
                        },
                    ],
                },
            ])
        );
    }

    return JSON.parse(localStorage.getItem("tasks"));
};

export const getIdFromlocalStorage = () => {
    if (!localStorage.getItem("id")) {
        localStorage.setItem("id", JSON.stringify(2));
    }

    return JSON.parse(localStorage.getItem("id"));
};
