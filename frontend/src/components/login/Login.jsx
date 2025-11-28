function Login(params) {
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