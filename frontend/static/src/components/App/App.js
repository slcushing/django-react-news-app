import {useEffect, useState} from 'react';
import {Route, Switch, withRouter, useHistory} from 'react-router-dom';
import './App.css';
import Spinner from 'react-bootstrap/spinner';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Header from './../Header/Header';
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import ProfileForm from './../Profile/ProfileForm';
import ArticleForm from './../Article/ArticleForm';




function App() {
  const [isAuth, setIsAuth] = useState(null)

  const history = useHistory();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/rest-auth/user/');
      if(!response.ok) {
        setIsAuth(false);
        history.push('/login');
      } else {
        setIsAuth(true);
        history.push('/profile')
      }
    }
    checkAuth();
  }, [history]);

  if(isAuth === null) {
    return <Spinner animation='grow' variant='primary' />
  }
  
  
  
  return (
    <>
      <Header />
      <Switch>
        <Route path='/registration'>
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>
        <PrivateRoute path='/profile' isAuth={isAuth}>
          <ProfileForm />
        </PrivateRoute>
        <Route >
        <ArticleForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;



/* <header className="header">
        <h1>NEWS APP</h1>
        <nav>
          <ul className="nav-bar">
            <li>World</li>
            <li>U.S.</li>
            <li>Sports</li>
            <li>Tech</li>
            <li>Opinion</li>
          </ul>
        </nav>

      </header> */