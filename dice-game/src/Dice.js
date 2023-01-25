import diceBlue from './assets/dice-blue-1.svg';
import diceRed from './assets/dice-red-1.svg';


function Dice(props) {
    const diceImg = props.color === 'blue' ? diceBlue : diceRed;
    return <img src={diceImg} alt='dice' />
}

export default Dice;