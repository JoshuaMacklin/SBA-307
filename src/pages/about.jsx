import gears from '../assets/gears-spinning.gif'
import '../App.css'

function About() {

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
      </form>
      
      <img className="gears" style={{width: "100px"}} src={gears} alt="" />
    </>
  )
}

export default About
