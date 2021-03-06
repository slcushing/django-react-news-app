import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id="header-nav">
            <div className='container'>
                <a className='navbar-brand' href='/'>Thoughtful Co.</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    <ul className='navbar-nav ml-auto'
                    className='container d-flex justify-content-end'
                    id='main-nav'>
                        <li className='nav-item'>
                            <NavLink to='/'> Home </NavLink>
                        </li>
                        {!props.isAuth && (
                            <>
                                <li className='nav-item'>
                                    <NavLink to='/login'> Login </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to='/registration'> Register </NavLink>
                                </li>
                            </>
                        )}

                        {props.isAuth && !props.isAdmin && (
                            <>
                            <li className='nav-item'>
                                <NavLink to='/articles/create'> Submit Article </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/articles/myarticles'>My Articles</NavLink>
                            </li>
                            </>
                        )}
                        {props.isAdmin && (
                        
                            <li className='nav-item'>
                                <NavLink to='/articles/admin'>Admin</NavLink>
                            </li>
 
                        )}
                        {props.isAuth && (
                            <button type="submit" className="logout" onClick={() => props.handleLogout()}>Logout</button>
                        )}
                       
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header