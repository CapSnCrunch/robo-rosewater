import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '../assets/svg/icon.svg'

function Navbar({title}) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-zinc-150 text-black-content'>
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <img src={Icon} alt="set icon" className='inline pr-2 text-3xl' width='34px' height='34px'/>
                    <Link to='/' className='text-lg font-bold align-middle'>
                        {title}
                    </Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'MTG Neural Net'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
