import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const TILE_STYLE = {
  padding: '10px',
  margin: '5px',
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

    return () => {
      document.removeEventListener('keydown', handleText);
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
      {show && (<>  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: '100vw', justifyContent: 'center' }}>
          {initialWord.split('').map((letter, index) => (
              <div style={TILE_STYLE}>
                {letter}
            </div>
          ))}
        </div>
        <input id='hiding-input' style={{ border: 'none', backgroundColor: 'transparent', display: 'none' }} type='text' autoFocus/>
        <div onClick={() => document.getElementById('hiding-input').focus()} style={{ display: 'flex', gap: 10, justifyContent: 'center', paddingTop: 20 }}>
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
