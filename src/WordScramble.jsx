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
  caretColor: 'transparent',
};

const EMPTY_TILE_STYLE = {
  ...TILE_STYLE,
  backgroundColor: '#111111',
  outline: 'none',
  transition: 'all 0.6s ease-in-out',
};

const BlockInput = ({ value, targetValue, onChange, success }) => {
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
    console.log("e from handleChange", e, e.target.value)
    const val = e.target.value.toLowerCase()
    if (value.length < targetValue.length && val.match(/[a-z]/i) && val.length === 1) {
      handleInputChange(index)
      onChange(value + val);
    }
  }

  return (
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center', paddingTop: 20}}>
      {targetValue.split('').map((char, index) => (
        <input
          style={EMPTY_TILE_STYLE}
          className={success ? 'success' : 'container'}
          key={index}
          ref={inputRefs.current[index]}
          type="text"
          maxLength="1"
          value={value[index] || ''}
          onChange={(e) => {
            console.log("e from change", e, index)
            !success && handleChange(e, index);
          }}
          onKeyDown={(e) => {
            console.log("e from keydown", e, Math.min(value.length, targetValue.length - 1))
            if ((e.key === 'Backspace' || e.key === 'Delete') && !success) {
              inputRefs.current[Math.min(value.length, targetValue.length - 1)].current.focus();
              e.preventDefault();
              onChange(value.slice(0, -1));
            }
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
      <BlockInput success={showCheckmark} value={inputText} targetValue={targetWord} onChange={setInputText} />
      <button onClick={() => {
        setInputText('')
      }}>Reset</button>
      <button onClick={onComplete}>Skip</button></>)}
    </div>
  );
};

export default WordScramble;
