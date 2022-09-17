import React from 'react'
import ButtonNext from './ButtonNext'

const QuoteBox = ({randomQuote, randomColor, getRandomInfo}) => {

  const textColor = {color: randomColor}

  return (
    <div className='quote__box'>
      <div style={textColor} className="quote__box__quote">
        <i className="quote__box__quote__mark fa-solid fa-quote-left"></i>
        <p className='quote__box__quote__quote'>{randomQuote.quote}</p>
      </div>
      <p style={textColor} className='quote__box__author'>{randomQuote.author}</p>
      <ButtonNext 
        randomColor={randomColor}
        getRandomInfo={getRandomInfo}
      />
    </div>
  )
}

export default QuoteBox