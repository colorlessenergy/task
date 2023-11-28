import { useState } from "react";

import AddListForm from "./Lists/AddListForm";
import { useTasksContext } from "../_contexts/TasksContext";

const List = () => {
    const { tasks } = useTasksContext();

    const [addList, setAddList] = useState(false);

    return (
        <div>
            {addList ? (
                <AddListForm setAddList={setAddList} />
            ) : (
                <div>
                    <div className="lists-header">
                        <div>lists</div>

                        <button
                            className="button-svg"
                            onClick={() =>
                                setAddList(
                                    (previousAddList) => !previousAddList
                                )
                            }>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-2">
                        {tasks.map((list, index) => {
                            return (
                                <div key={index} className="list-item">
                                    <button className="button-svg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
                                        </svg>
                                    </button>

                                    <span className="list-text">
                                        {list.list}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
export default List;
