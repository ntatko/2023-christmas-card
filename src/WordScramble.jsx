import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const TILE_STYLE = {
  padding: '10px',
  margin: '5px',
  cursor: 'move',
  display: 'flex',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: '40px',
  height: '40px',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  // disable user-select
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
};

const EMPTY_TILE_STYLE = {
  ...TILE_STYLE,
  backgroundColor: '#111111',
};

const WordScramble = ({ initialWord, targetWord, onComplete, show }) => {

  const [inputText, setInputText] = useState('');
  const [showCheckmark, setShowCheckmark] = useState(false);
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (inputText === targetWord) {
      onShowCheckmark();
    }
  }, [targetWord, inputText, onComplete]);

  const onShowCheckmark = () => {
    setShowCheckmark(true);
    setTimeout(() => {
      setShowCheckmark(false);
      onComplete();
      setInputText('');
    }, 2500);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleText);
    document.addEventListener('mousedown', () => prompt())

    return () => {
      document.removeEventListener('keydown', handleText);
      document.removeEventListener('mousedown', () => prompt())
    }
  }, [inputText])

  const handleText = (event) => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      setInputText(inputText.slice(0, -1));
    } else if (event.key.length === 1 && inputText.length < targetWord.length) {
      setInputText(inputText + event.key);
    }
  }


  return (
    <div>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={showCheckmark ? 700 : 0}
      />
      {show && (<>  <div style={{ display: 'flex', gap: 10 }}>
          {initialWord.split('').map((letter, index) => (
              <div style={TILE_STYLE}>
                {letter}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {targetWord.split('').map((letter, index) => (
            <div key={index} style={EMPTY_TILE_STYLE}>
              {inputText.split('')[index]}
            </div>
          ))}
        </div>
        <button onClick={() => setInputText('')}>Reset</button>
        <button onClick={onComplete}>Skip</button></>)}
    </div>
  );
};

export default WordScramble;
