import React, {useState, useEffect} from 'react'

const SortBtn = ({parent, setActiveState, activeState}) => {
    const [active, setActive] = useState(parent === activeState)
    const [hoverBorder, setHoverBorder] = useState(false)
   
    const changeActive = () => {
  
        setActiveState(parent)
    }

    const activeHandler = () => {
      setActive(!active)
    }
  return (
    <>
    {active ?
        <button id={ 'activeSort'} onClick={()=> setActiveState(!active)}>{parent}</button> :
        <button id={hoverBorder && 'activeSort'} onMouseOver={()=> setHoverBorder(true)} onMouseLeave={()=> setHoverBorder(false)} onClick={() => changeActive()}>{parent}</button>
    }
    </>
  )
}

export default SortBtn