// import React, { useState } from 'react';
// import './Login.css';
// import { RiAdminFill } from "react-icons/ri";

// function Login() {
//   const [isLogin, setIsLogin] = useState(true);

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//    /* From Uiverse.io by aboalsim114 */ 
// <form class="form">
//   <h1>Admin Login <RiAdminFill /></h1>
//   {/* <input placeholder="Enter your name" class="input" type="text"> */}
//   <input placeholder="Enter Users Id" class="input" type="text"/>
//     <input placeholder="Enter Pasword" class="input" type="password"/>
//     <span id="forget">Forget Pasword</span>

//   <button>Submit</button>
// <span>Sign Up</span>
// </form>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import './Login.css';
import { RiAdminFill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa6";


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <form className="form">
        <h1> {isLogin ? ' Admin Login'  : 'Sign Up '} <RiAdminFill /></h1>
        
        {isLogin ? (
          <>
            <input className="input" placeholder="Enter Users Id" type="text" />
            <input className="input" placeholder="Enter Password" type="password" />
            <span id="forget">Forget Password</span>
            <button type="submit">Submit</button>
            <span className="toggle-link" onClick={handleToggle}>Sign Up</span>
          </>
        ) : (
          <>
            <input className="input" placeholder="Enter Employee Id" type="text" />
            <input className="input" placeholder="Enter Email Id" type="email" />
            <input className="input" placeholder="Enter Mobile No" type="text" />
            <input className="input" placeholder="Enter Password" type="password" />
            <input className="input" placeholder="Confirm Password" type="password" />
            <button className="otp-btn" type="button">Send OTP</button>
            <input className="input" placeholder="Enter OTP" type="text" />
            <button type="submit">Sign Up</button>
            <span className="toggle-link" onClick={handleToggle}>Log In</span>
          </>
        )}
      </form>
    </div>
  );
}

export default Login;
