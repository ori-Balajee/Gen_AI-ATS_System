import {Link } from 'react-router-dom'

function Register() {

  function handleReload(e) {
    e.preventDefault();
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={handleReload}>
          <div className="input-group">
            <label htmlFor="Username">Username</label>
            <input type="text" id="Username" name="Username" placeholder="Enter Email Here" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email Here" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='Enter Password' />
          </div>

          <button className="button primary-button">Register</button>
        </form>

        <p> Already have an account ? <Link to={"/Login"}>Login</Link></p>

      </div>
    </main>
  )
}

export default Register