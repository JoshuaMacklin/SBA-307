// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'

function Settings() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{marginTop: "72px"}}>Settings Page</h1>
      <form className='wideForm' action="">
        <h2>Change User Information</h2>
        <div>
            <div>
                <label htmlFor="username">Username</label>
            </div>
            <div>
                <input type="text" name="username" id="username"/>
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="password">Password</label>
            </div>
            <div>
                <input type="password" name="password" id="password"/>
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
            </div>
            <div>
                <input type="date" name="dob" id="dob"/>
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="gender">Gender</label>
            </div>
            <div>
                <select name="gender" id="gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="NB">Non Binary</option>
                    <option value="NL">Not Listed</option>
                    <option value="NA">Do Not Wish to Disclose</option>
                </select>
            </div>
        </div>
        <input type="submit" name="submit" id="submit" value="submit"/>
      </form>
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

export default Settings
