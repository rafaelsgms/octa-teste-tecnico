import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className='ul-weather'>
                <li>
                    <Link to='/'>Weather</Link>
                </li>
                <li>
                    <Link to='/cep'>CEP</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar