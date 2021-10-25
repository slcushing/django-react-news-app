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
import MyArticleList from './../Article/MyArticleList';
import Home from './../Home/Home';
import AdminArticleList from './../Article/AdminArticleList';


function App() {
  const [isAuth, setIsAuth] = useState(null)
  const [isAdmin, setIsAdmin] = useState(null)

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

  // useEffect(() => {
  //   const checkAdmin = async () => {
  //     const response = await fetch('/rest-auth/user/');
  //     if(!response.ok) {
  //       setIsAdmin(false);
  //     } else {
  //       setIsAdmin(true);
  //     }
  //   }
  //   checkAdmin();
  // }, [history]);

  if(isAuth === null) {
    return <Spinner animation='grow' variant='primary' />
  }
  
  
  
  return (
    <>
      <Header isAuth={isAuth}/>
      <Switch>
        <Route path='/registration'>
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>
        <PrivateRoute path='/articles/create' isAuth={isAuth}>
          <ArticleForm />   
        </PrivateRoute>
        <PrivateRoute path='/articles/myarticles/:status?' isAuth={isAuth}>
          <MyArticleList/>
         </PrivateRoute>
        <Route path='/articles/admin/:status?'isAdmin={isAdmin}>
          <AdminArticleList/>
        </Route>
        <Route path="/:category?">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
