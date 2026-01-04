function ListItem({ item, index}) {
    const handleClick = (event) => {
        event.target.classList.toggle('line-through');
    }

    return (
        <div className="text-xl">
            <input 
                className=""
                type="checkbox" 
                id={`item-${index}`} 
                name={`item-${index}`} 
                value={item}
            >
            </input>
            <label 
                onClick={handleClick}
                className="ml-2 hover:cursor-pointer decoration-3" 
                htmlFor={`item-${index}`}
            >
                {item}
            </label>
        </div>
    );
}

export default ListItem;