function Login(params) {
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.username);
        console.log(event.target.username.value);
        
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