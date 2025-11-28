import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        let backend_url = 'http://localhost:3200/login';

        let options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        let response = await fetch(backend_url, options);
        let responseData = await response.json();

        if (responseData.flag === true) {
            navigate('/restaurant');
        } else {
            alert(responseData.msg);
        }
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Username: <input type="text" name="username" />
                Password: <input type="password" name="password" />
                <input type="submit" value="login" />
            </form>
        </div>
    );
}

export default Login;
