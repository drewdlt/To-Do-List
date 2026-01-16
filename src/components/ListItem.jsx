function ListItem({ item, index, handleDelete}) {
    const handleClick = (event) => {
        event.target.classList.toggle('line-through');
    }

    const toTitleCase = (task) => {
        const titleCase = [...task];
        titleCase[0] = titleCase[0].toUpperCase();
        return titleCase
    }

    return (
        <div className="text-xl flex gap-10 w-100 justify-between border-b py-2 px-1">
            <p
                onClick={handleClick}
                className="ml-2 hover:cursor-pointer decoration-3" 
            >
                {toTitleCase(item)}
            </p>
            <button onClick={() => handleDelete(index)} className="border px-1 text-sm rounded-md bg-blue-500 hover:bg-blue-500/75 hover:cursor-pointer transition-colors">
                Delete
            </button>
        </div>
    );
}

export default ListItem;