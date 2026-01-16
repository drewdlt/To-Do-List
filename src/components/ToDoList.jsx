import ListItem from "./ListItem";

function ToDoList({ list, handleDelete }) {

    return (
        <>
        {list.length === 0 ? (
            <p className="text-2xl mt-5">You're all caught up!</p>
        ) : (
            list.map((item, index) => {
                return (
                    <ListItem key={index} item={item} index={index} handleDelete={handleDelete}/>
                )
            })
        )}
        </>
    );
}

export default ToDoList;