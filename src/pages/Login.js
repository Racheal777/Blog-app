import React,{useState} from 'react';
import logo from '../images/travel111.jpg';
import{Link} from 'react-router-dom'
import "../LoginStyle.css"
// eslint-disable-next-line
import SignIn from './SignIn'

// function Login () {
//     const[email,setEmail] = useState("")
//     const[password,setPassword] = useState()
//     const[loggedin,setLoggedin] = useState("False");
  
//     const handleEmailInput =(event) => {
//       setEmail(event.target.value)
//     }
//     const handlePasswordInput =(event) => {
//       setPassword(event.target.value)
//     };
  
  
//   function handleLogin(event) {
//     event.preventDefault();
//     if (email === "kuranchieracheal.com"&& password === "123456"){
//       setLoggedin(true)
//     }
//   }
   
  
//   function handleLogout(event) {
//     event.preventDefault();
//     setLoggedin(false)
//   }
  
//          return(
//     <div>
  
//       {
//         LoggedIn
//         ?
  
//         <>
//         <p> Welcome, adventurous fellow</p>
//         <button 
//         onClick={handleLogout}>Logout</button>
//         </>
//         :
        
    
  
//       <>
//         <form>
//           <label>Email</label><br/>
//           <input type ="text" value = {email} onChange={handleEmailInput} />
  
//           <label> Password</label><br/>
//           <input type="text" value = {password} onChange = {(event) => handlePasswordInput (event)} />
//           <button 
//           onClick = {handleLogin}>Login</button>
  
//         </form>
//         </>
//         }
//       </div>
  
      
//         );
  
      
  
  








function Login (){
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState()
    const[Loggedin,setLoggedin] = useState("False");
  
    const handleEmailInput =(event) => {
      setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
      setPassword(event.target.value)
    };
  
  
  function handleLoggedin(event) {
    event.preventDefault();
    if (email === "kuranchieracheal@gmail.com"&& password === "123456")
      setLoggedin(true)
    
  }
   
  
  function handleLogout(event) {
    event.preventDefault();
    setLoggedin(false)
  }

    
    return (
        <div>
  
           {
            Loggedin
            ?
  
        <>
        <p> Welcome, adventurous fellow</p>
        <button 
        onClick={handleLogout}>Logout</button>
        </>
        :
        
    
  
      <>
            <div className = "auth">
              <img src={logo} alt = "" height="250px"/>  
            </div> 
            <div className="rich">
                <h1 className="text-center"><span>Lets Travel Together</span></h1>
                <form>
    
         <label className="world">Email:</label><br/>
         <input type ='email' value={email} onChange= {handleEmailInput} Placeholder = 'Please enter your email'  /><br/>
         <label className="world">Password:</label><br/>
         <input type ='text' value={password} onChange={(event) => handlePasswordInput(event)} Placeholder = ' Please enter your password'/><br/>

            <button onClick={handleLoggedin}> Login </button> <button>Forgot Password</button>
            <p> Don't have an account ? <br/> </p>
            <Link to='/SignIn'><p className="babe">Create Account</p></Link>
            </form>
            </div>
        </>
}
            
    </div>

        
    
        
        
    )
}

export default Login;