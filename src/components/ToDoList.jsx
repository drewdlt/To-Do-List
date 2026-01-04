import ListItem from "./ListItem";

function ToDoList({ list }) {

    return (
        <>
        {list.length === 0 ? (
            <p className="text-2xl mt-5">You're all caught up!</p>
        ) : (
            list.map((item, index) => {
                return (
                    <ListItem key={index} item={item} index={index}/>
                )
            })
        )}
        </>
    );
}

export default ToDoList;