
import Header from './header';
import Footer from './footer';
import './index.css';
import Content from './content';
import { useState } from 'react';
import Additems from './AddItems';
import SearchItem from './searchitem.';



function App() {
  const [items, setItems]
    = useState(JSON.parse
      (localStorage.getItem('to_do_list'))

    )
  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState("")

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addnewitem = { id, checked: false, item }
    const listItems = [...items, addnewitem]
    setItems(listItems)
    localStorage.setItem('to_do_list', JSON.stringify(listItems))
  }

  const handlecheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('to_do_list', JSON.stringify(listItems))
  }

  const handedelete = (id) => {
    const listItems = items.filter(item =>
      item.id !== id
    )
    setItems(listItems)
    localStorage.setItem('to_do_list', JSON.stringify(listItems))
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    if (!newItem) return;
    console.log('submitted');
    additem(newItem)
    setNewItem('')
  }

  console.log(setNewItem, "demo")
  return (
    <div className='inside-div'>
      <div className="App">
          <Header></Header>
          <Additems
            newItem={newItem}
            setNewItem={setNewItem}
            handlesubmit={handlesubmit}

          ></Additems>
          <SearchItem
            search={search}
            setSearch={setSearch}
          ></SearchItem>
          <Content
            items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
            handlecheck={handlecheck}
            handedelete={handedelete}
          ></Content>
          <Footer length={items.length}></Footer>
        </div>
     </div>
  );
}

export default App;
