import '../App.css'

function Settings() {
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
        <button type="submit" name="submit" id="submit" value="submit">Submit</button>
      </form>
    </>
  )
}

export default Settings
