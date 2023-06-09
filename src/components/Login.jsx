import React, {useState} from 'react';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e)=>{
	e.preventDefault();
	console.log(email);
  };

  return (
	<div className="auth-form-container">
	  <form className="login-form" onSubmit={handleSubmit}>
		<label htmlFor='email'>Email</label>
		<input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder='youremail@gmail.com'/>
		<label htmlFor='password'>Password</label>
		<input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" id="password" name="password" placeholder='********'/>
	    <button type="submit">Log In</button>
	  </form>
	  <button className="link-btn" onClick={()=> props.onFormSwitch("register")}>Don't have an account? Register here.</button>
	</div>
  )
}

export default Login;