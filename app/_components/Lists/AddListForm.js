const AddListForm = () => {
    return (
        <form className="add-list-form">
            <label htmlFor="add-list">add list</label>
            <input type="text" id="add-list" className="add-list-input mt-2" />

            <button className="add-list-button mt-2">add</button>
        </form>
    );
};

export default AddListForm;
