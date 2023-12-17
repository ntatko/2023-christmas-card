import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const TILE_STYLE = {
  padding: '10px',
  margin: '5px',
  display: 'flex',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: '30px',
  height: '30px',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '26px',
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

const BlockInput = ({ value, targetValue, onChange }) => {
  // Create refs for each input
  const inputRefs = useRef([...Array(targetValue.length)].map(() => React.createRef()));

  // Function to handle input change and focus on the next input
  const handleInputChange = (index) => {
    if (index < inputRefs.current.length - 1) {
      // Move focus to the next input
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleChange = (e, index) => {
    const val = e.key;
    console.log(e.key)
    if (e.key === 'Backspace' || e.key === 'Delete') {
      onChange(value.slice(0, -1));
      if (index > 0) {
        inputRefs.current[index - 1].current.focus();
      }
    } else if (value.length < targetValue.length) {
      handleInputChange(index)
      onChange(value + val);
    }
  }

  return (
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center', paddingTop: 20}}>
      {targetValue.split('').map((char, index) => (
        <input
          style={EMPTY_TILE_STYLE}
          key={index}
          ref={inputRefs.current[index]}
          type="text"
          maxLength="1"
          value={value[index] || ''}
          onKeyDown={(e) => {
            handleChange(e, index);
          }}
        />
      ))}
    </div>
  );
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

  console.log(initialWord, targetWord, inputText)

  return (
    <div>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={showCheckmark ? 700 : 0}
      />
      {show && (<>  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, maxWidth: '100vw', justifyContent: 'center' }}>
        {initialWord.split('').map((letter, index) => (
          <div style={TILE_STYLE}>
            {letter}
          </div>
        ))}
      </div>
      <BlockInput value={inputText} targetValue={targetWord} onChange={setInputText} />
      <button onClick={() => setInputText('')}>Reset</button>
      <button onClick={onComplete}>Skip</button></>)}
    </div>
  );
};

export default WordScramble;
