import { useEffect, useState } from 'react'
import PageItem from './components/page-item'

import './App.css'

function App() {
  const [allPages, setAllPages] = useState(true);
  const [pages, setPages] = useState([
    {name: 'Page 1', checked: false},
    {name: 'Page 2', checked: false}, 
    {name: 'Page 3', checked: false}, 
    {name: 'Page 4', checked: false}
  ]);

  const handleAllPages = () => {
    setPages(pages.map(page => ({...page, checked: !allPages})));
  }

  const handlePageSelect = (value, index) => {
    const newPages = [...pages]
    newPages[index].checked = !value;
    setPages(newPages);
  }

  const handleSubmit = () => {
    const checkedPages = pages.filter(page => page.checked);
    console.log(checkedPages);
  }

  useEffect(() => {
    if (pages.every(page => page.checked)) {
        setAllPages(true);
      } else {
        setAllPages(false);
      }
  }, [pages])

  return (
    <main className='main'>
      <div className='container'>
        <div className='item-container' onClick={handleAllPages}>
          <p>All pages</p>
          <div className='checkbox-container'>
            <input type='checkbox' id='all-pages' checked={allPages} readOnly/>
            <label className="custom-checkbox" htmlFor="all-pages"/>
          </div>
        </div>
        <hr/>
        <div className='items-container'>
          {pages.map((page, index) => (
            <PageItem 
              key={page.name} 
              item={page.name} 
              checked={page.checked}
              onClick={() => handlePageSelect(page.checked, index)}
            />
          ))}
        </div>
        <hr/>
        <div className='button-container'>
          <button className='button-primary' onClick={handleSubmit}>Done</button>
        </div>
      </div>
    </main>
  )
}

export default App