import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import colors from './utils/colors.js'
import QuoteBox from './components/QuoteBox'

function App() {

  const randomIndex = arr => {
    return parseInt(Math.random() * arr.length)
  }

  const quote = quotes[randomIndex(quotes)]
  const color = colors[randomIndex(colors)]

  const [randomQuote, setRandomQuote] = useState(quote)
  const [randomColor, setRandomColor] = useState(color)

  const bkgdColor = {
    backgroundColor: randomColor
  }

  const getRandomInfo = () => {
    setRandomQuote(quotes[randomIndex(quotes)])
    setRandomColor(colors[randomIndex(colors)])
  }

  return (
    <div style={bkgdColor} className="App">
      <h1 className='page__tittle'>Random Quotes For You</h1>
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomInfo={getRandomInfo}
      />
    </div>
  )
}

export default App