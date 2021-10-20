import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <a className='navbar-brand' href='/'>News App</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <NavLink to='/'> Home </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/profile'> Profile </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/login'> Login </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/registration'> Register </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header