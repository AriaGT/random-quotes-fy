import React from 'react'

const ButtonNext = ({randomColor, getRandomInfo}) => {

  const btnColor = {backgroundColor: randomColor}

  return (
    <button 
      style={btnColor}
      className='quote__box__button'
      onClick={getRandomInfo}
      ><i className="fa-solid fa-arrows-rotate"></i>
    </button>
  )
}

export default ButtonNext