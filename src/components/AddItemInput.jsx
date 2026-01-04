import { useState } from "react";

function AddItemInput({ list, setList }) {
    const [currItem, setCurrItem] = useState('');
    
    const handleKeyDown =(event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            setList((prevList) => [...prevList, currItem]);
            console.log('List: ', list);

            setCurrItem('');
        }
    };

    return (
        <input 
            onKeyDown={handleKeyDown} 
            onChange={(event) => setCurrItem(event.target.value)} 
            value={currItem} 
            type="text" 
            placeholder="Add a new item" />
    );
}

export default AddItemInput;