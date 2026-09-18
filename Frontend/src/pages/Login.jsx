import "./pages.scss";
import { Link } from 'react-router-dom'

function Login() {

  function handleReload(e) {
    e.preventDefault();
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleReload}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email Here" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='Enter Password' />
          </div>

          <button className="button primary-button">Log In</button>
        </form>

        <p> Don't have a Account ? <Link to={"/Register"}>Register</Link></p>

      </div>
    </main>
  )
}

export default Login