import './Header.css'

function Header() {
  return (
    <>
      <div className="links">
        <ul>
            <li>
                <a href="../index.html">Home</a>
            </li>
            <li>
                <a href="./about.html">About</a>
            </li>
            <li>
                <a href="./settings.html">Settings</a>
            </li>
        </ul>
      </div>
      <div className='linkBox'></div>
    </>
  )
}

export default Header
