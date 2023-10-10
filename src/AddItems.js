import React from "react";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
const Additems = ({newItem,setNewItem,handlesubmit}) => {
    return (
        <form className="addForm" onSubmit={handlesubmit}>
            <label
                htmlFor="Additem"
            >Add Items</label>
            <input
                autoFocus
                id="Additem"
                type="text"
                placeholder="Add your list"
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}></input>
            <button
                type="submit"
                aria-label="Add item"
            ><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd></button>
        </form >

    )
}
export default Additems;