import React from 'react';
import FlipNumbers from 'react-flip-numbers';

import '../styles/ticker.css';

const digitCheck = (digit) => {
  const digitString = {};
  digitString.first = ((digit < 10) ? '0' : Math.trunc(digit/10).toString());
  digitString.second = (digit % 10).toString();
  return digitString;
}


const Ticker = (number, label) => {
  const digits = digitCheck(number);
  return (
    <div className='tool'>
      <div className='time-block'>
        <FlipNumbers
          height={76}
          width={50}
          color='white'
          background='#8a449c'
          play={true}
          nonNumberStyle={{position:'relative', zIndex:400, clipPath:'inset(10px)', overflow:'hidden', transform:'scale(2, 5) rotate(20deg)', fontFamily:'Arial', color:'#792a8b', fontSize:'36px'}}
          numberStyle={{}}
          numbers={digits.first + '|' + digits.second}
        />
       </div>
       <div className='label-block'>
         <h4>{label}</h4>
       </div>
    </div>
  )
}

export default Ticker;