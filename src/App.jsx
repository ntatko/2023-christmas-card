import { useState } from 'react'
import './App.css'
import content, { months } from './assets/months'
import WordScramble from './WordScramble'
import MERRY_CHRISTMAS from './assets/merry_christmas.png'

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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={{ width: '100%', maxWidth: '500px', padding: 12 }}>
          <img style={{ width: '100%' }} src={MERRY_CHRISTMAS} />
          <p>Merry Christmas! Instead of a christmas card (because we are never with it enough to make those), this year, we made some word scrambles for each month, and each scramble unlocks a monthly summary of sorts, so you can see our year in review.</p>
          <p>Have fun with the scrambles, and Merry Christmas. (You can skip the scrambles if you don't like that kind of fun)</p>
        </div>
      </div>
      {!showSolution && <div style={{ fontSize: 24, paddingBottom: 8 }}>{`For ${content[currentMonth].name}`}</div>}
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
