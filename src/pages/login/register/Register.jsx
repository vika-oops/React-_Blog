import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerform">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter Your Username...."/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter Your Email...."/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter Your Password.."/>
            <button className="registerButton">Login</button>
        </form>
        <button className="registerLoginButton">Login</button>
        </div>
  )
}
