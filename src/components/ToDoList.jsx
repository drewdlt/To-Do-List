import { useEffect, useState } from "react";

function ToDoList() {
    const [list, setList] = useState([]);
    
    const items = [
        'Take out the trash',
        'Walk the dog',
        'Write some code'
    ];

    useEffect(() => {
        setList([...items]);
    }, [items])

    return (
        <>
        {list.length === 0 ? (
            <p>No items in the list</p>
        ) : (
            list.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        )}
        </>
    );
}

export default ToDoList;