import Button from './Button';
import Dice from './Dice';
import MultiDice from './MultiDice';
import { useState } from 'react';

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);


    const handleRollClick = () => {
        const nextNum = random(6);
        // setNum(nextNum);
        // setSum(sum + nextNum);
        // gameHistory.push(nextNum);
        // setGameHistory(gameHistory);
        setGameHistory([...gameHistory, nextNum]);
    };

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>CHANGE</Button>
                <Button onClick={handleClearClick}>CLEAR</Button>
            </div>

            <br></br>
            <MultiDice color='red' num={num} />
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
export default App;     // export를 통해 이 컴포넌트를 다른 파일에서도 활용 가능
