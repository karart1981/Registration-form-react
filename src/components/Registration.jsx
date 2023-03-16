import React,{useState} from 'react';

const Registration = (props) => {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [name,setName] = useState("");
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container"> 
      <form className="register-form" onSubmit={handleSubmit}>
       <label htmlFor="name">Full name</label>
       <input value={name} name="name" id="name" placeholder="Full Name" />
       <label htmlFor="Email">Email</label>
       <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder="youremail@gamil.com" />
       <label htmlFor="password">Password</label>
       <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" name="password" id="password" placeholder="********"/>
       <button type="submit">Registration</button>
      </form>
      <button className="link-btn" onClick={()=> props.onFormSwitch("login")}>Already have an account? Login here.</button>
    </div>
  )
}

export default Registration;