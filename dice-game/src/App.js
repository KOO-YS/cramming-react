import { useState } from 'react';
import Button from './Button';
import Board from './Board';



function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {

    // 자식 컴포넌트의 state를 부모 컴포넌트로 올리는 방법 : state lifting
    const [myNum, setMyNum] = useState(1);
    const [mySum, setMySum] = useState(0);
    const [myGameHistory, setMyGameHistory] = useState([]);

    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyNum(nextMyNum);
        setOtherNum(nextOtherNum);
        setMySum(mySum + nextMyNum);
        setOtherSum(otherSum + nextOtherNum);
        setMyGameHistory([...myGameHistory, nextMyNum]);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyNum(1);
        setOtherNum(1);
        setMySum(0);
        setOtherSum(0);
        setMyGameHistory([]);
        setOtherGameHistory([]);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>CHANGE</Button>
                <Button onClick={handleClearClick}>CLEAR</Button>
            </div>
            <div>
                <Board name="나" color="blue" num={myNum} sum={mySum} gameHistory={myGameHistory}/>
                <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
            </div>
        </div>
);
}
export default App;     // export를 통해 이 컴포넌트를 다른 파일에서도 활용 가능
