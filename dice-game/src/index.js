import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appTag = ReactDOM.createRoot(document.getElementById('appTag'));

const element = <h2>Dice Game</h2>;

const component = (
  <>
  </>
);

root.render(component);
appTag.render(<App />);