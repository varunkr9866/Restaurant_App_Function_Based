function Login(params) {
    function handleSubmit(event){
        event.preventDefault();
        let user ={
        username : event.target.username.value;
        password : event.target.password.value;
        }
    }
    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={null}>
                Username: <input type="text" name="username" id="username"></input>
                Password: <input type="password" name="password" id="password"></input>
                <input type="submit" value="login" />
            </form>
        </div>
    )
}

export default Login;