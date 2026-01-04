function ToDoList({ list }) {

    return (
        <ul>
        {list.length === 0 ? (
            <p>You're all caught up!</p>
        ) : (
            list.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        )}
        </ul>
    );
}

export default ToDoList;