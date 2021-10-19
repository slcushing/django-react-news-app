import './App.css';
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import ProfileForm from '../Profile/ProfileForm';




function App() {
  return (
    <div className="App">
      {/* <header className="header">
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

      </header> */}
      <RegistrationForm />
      <LoginForm />
      <ProfileForm />
    </div>
  );
}

export default App;
