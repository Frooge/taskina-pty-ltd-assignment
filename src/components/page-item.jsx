import React from 'react'

export default function PageItem({item, checked, onClick}) {
  return (
    <div className='item-container' onClick={onClick}>
        <p>{item}</p>
        <div className='checkbox-container'>
            <input type='checkbox' id={item} checked={checked} onChange={onClick}/>
            <label className="custom-checkbox" htmlFor={item}/>
        </div>
    </div>
  )
}
