import Button from './Button';
import Dice from './Dice';
import MultiDice from './MultiDice';
import { useState } from 'react';

function random(n) {
    return Math.ceil(Math.random() * n);
}

function Board( {name, color, num, sum, gameHistory} ) {

    return (
        <div>
            <br></br>
            <h2>{name}</h2>
            <MultiDice color={color} num={num} />
            <br></br>
            <br></br>
            
            <hr></hr>
            
            <div>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}
export default Board;

