import Itemlist from "./itemsList";



function Content({items,handedelete,handlecheck,setItems}){


    

    return(
        <main>
            {(items.length) ? (
                <Itemlist
                    items={items}
                    handlecheck={handlecheck}
                    handedelete={handedelete}
                >

                </Itemlist>
            ):(
                <p style={{color:"white"}}>Your List Is Empty</p>
            )
}           
            
        </main>
    )
}

export default Content;