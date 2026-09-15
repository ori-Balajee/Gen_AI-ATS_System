import "./pages.scss";

function Login() {
  return (
    <>
      <div>Login</div>

      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Email Here"/> 
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' placeholder='Enter Password'/>
        </div>

        <button className="button primary-button">Log In</button>
      </form>

    </>
  )
}

export default Login