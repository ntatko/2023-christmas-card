import { useState } from 'react'
import './App.css'
import content, { months } from './assets/months'
import WordScramble from './WordScramble'

function App() {
  const [currentMonth, setCurrentMonth] = useState(localStorage.getItem('currentMonth') || months[0])
  const [showSolution, setShowSolution] = useState(false)

  const nextMonth = months[months.indexOf(currentMonth) + 1]
  const prevMonth = months[months.indexOf(currentMonth) - 1]

  const getNextMonth = () => {
    setCurrentMonth(nextMonth)
    localStorage.setItem('currentMonth', nextMonth)
  }

  console.log(months, currentMonth, content[currentMonth])

  return (
    <>
      <WordScramble
        initialWord={content[currentMonth].clue}
        targetWord={content[currentMonth].word}
        onComplete={() => setShowSolution(true)}
        show={!showSolution}
      />
      {showSolution && (
        <>
          <div>{content[currentMonth].body()}</div>
          <button onClick={() => {
            getNextMonth()
            setShowSolution(false)
          }}>{`Go to ${content[nextMonth].name}`}</button>
        </>
      )}
    </>
  )
}

export default App
