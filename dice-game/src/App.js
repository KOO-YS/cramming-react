import Button from './Button';
import Dice from './Dice';
import MultiDice from './MultiDice';

function App() {
    return (
        <div>
            App Component 
            <br></br>
            <Dice color='red'/>
            
            <br></br>
            <br></br>

            Prop Practice : Default
            <br></br>
            <MultiDice />

            <br></br>
            <br></br>
            
            Prop Practice : set Props
            <br></br>
            <MultiDice color='red' num='3' />
            <br></br>
            <br></br>

            <div>
                <Button>button text</Button>
                <Button>change text</Button>
            </div>
        </div>
    );
}
export default App;     // export를 통해 이 컴포넌트를 다른 파일에서도 활용 가능
