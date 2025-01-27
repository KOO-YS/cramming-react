import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TypeScriptButton, TypeScriptButton2, greet} from './LearnTypescript.tsx'


const person = { name: '홍길동', age: 30 };

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React + TypeScript Playground</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <TypeScriptButton txt={"the first ts button I made"} />
          <br/>
          <TypeScriptButton2 disabled={false} title={"the second ts button I made"} />

          <br/>
          <TypeScriptButton txt={greet(person)} />
      </>
  )
}

export default App
