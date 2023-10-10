import React from "react";
import { IoTrashSharp } from 'react-icons/io5';


const Itemlist = ({ items, handlecheck, handedelete }) => {

    return (

        <ul>
            {items.map(item =>
                <li className="item" key={item.id}>
                    <input type="checkbox"
                        checked={item.checked}
                        onChange={() => handlecheck(item.id)}>
                    </input>

                    <label
                        style={item.checked ? { textDecoration: 'line-through' } : null}
                        onDoubleClick={() => handlecheck(item.id)}>
                        {item.item}</label>
                    <IoTrashSharp
                        role="button"
                        tabIndex='0'
                        onClick={() => { handedelete(item.id) }}
                        // aria-label={`Delete ${item.item}`}  it will use for SEO
                    >

                    </IoTrashSharp>

                </li>
            )}
        </ul>
    )
}
export default Itemlist;








