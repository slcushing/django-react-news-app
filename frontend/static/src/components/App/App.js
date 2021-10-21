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
import Home from './../Home/Home';


function App() {
  const [isAuth, setIsAuth] = useState(null)

  const history = useHistory();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/rest-auth/user/');
      if(!response.ok) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
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
        <PrivateRoute path='/articles/create' isAuth={isAuth}>
          <ArticleForm />   
        </PrivateRoute>
        <Route path="/:category?">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
