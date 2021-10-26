import {useState} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

function LoginForm(props) {
    const [user, setUser] = useState({
        username:'',
        password:'',
    });

    function handleInput(event) {
        const {name,value} = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const options = {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(user)
        };

        const response = await fetch('/rest-auth/login/', options).catch(handleError);
        if(!response) {
            console.log(response);
        } else {
            const data = await response.json();
            Cookies.set('Authorization', `Token ${data.key}`);
            props.setIsAuth(true);
            props.history.push('/');
        }
    }

    if(props.isAuth) {
        return <Redirect to='/' />
    }


    return (
        <form className='mt-3 col-4 offset-lg-4 login-form' onSubmit={handleSubmit}>
            <div className='form-group text-left mb-3'>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    className='form-control'
                    id='username'
                    placeholder='Enter username'
                    onChange={handleInput}
                    required
                    name='username'
                    value={user.username}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    onChange={handleInput}
                    required
                    name='password'
                    value={user.password}
                />
            </div>
            <button type='submit' className='btn' id='login-button'>Login</button>

        </form>
    )
}

export default withRouter(LoginForm)