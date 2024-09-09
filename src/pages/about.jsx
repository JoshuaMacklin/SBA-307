// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import gears from '../assets/gears-spinning.gif'
import '../App.css'

function About() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{marginTop: "72px"}}>About Page</h1>
      <form  className="wideForm" action="">
        <h2>Get in contact with us</h2>
        <div>
            <label htmlFor="email">Email: </label>
        </div>
        <div>
            <input type="email" name="email" id="email"/>
        </div>
        <div>
            <label htmlFor="message">Message</label>
        </div>
        <div>
            <input type="text" name="message" id="message"/>
        </div>
        <button type="submit" name="submit" id="submit" value="submit">Submit</button>
        {/* <input type="submit" name="submit" id="submit" value="submit"/> */}
      </form>
      
      <img className="gears" style={{width: "100px"}} src={gears} alt="" />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default About
