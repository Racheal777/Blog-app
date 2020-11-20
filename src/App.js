import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';


function App () {
  return(
    <Router>
      <Navbar/>
      <Switch>
      
      {/* <Route path="/" exact={true} component={Home} /> */}
      <Route exact path = "/" component= {Home} />
      <Route path = "/About" component= {About} />
      <Route path = "/Shop" component= {Shop} />
      <Route path = "/login" component= {Login} />
      <Route path = "/SignIn" component= {SignIn} />
      </Switch>
     
    </Router>
  )
  
}

export default App;






// function App () {
//   const[email,setEmail] = useState("")
//   const[password,setPassword] = useState()
//   const[loggedin,setLoggedin] = useState("False");

//   const handleEmailInput =(event) => {
//     setEmail(event.target.value)
//   }
//   const handlePasswordInput =(event) => {
//     setPassword(event.target.value)
//   };
// }

// function handleLogin(event) {
//   event.preventDefault();
//   if (email === "kuranchieracheal.com"&& password === "123456"){
//     setLoggedin(true)
//   }
// }
 

// function handleLogout(event) {
//   event.preventDefault();
//   setLoggedin(false)
// }

// return (
//   <div>

//     {
//       LoggedIn
//       ?

    //   <>
    //   <p> Welcome, adventurous fellow</p>
    //   <button 
    //   onClick={handleLogout}>Logout</button>
    //   </>
    //   :
      
  

    // <>
    //   <form>
    //     <label>Email</label><br/>
    //     <input type ="text" value = {email} onChange={handleEmailInput} />

    //     <label> Password</label><br/>
    //     <input type="text" value = {password} onChange = {(event) => handlePasswordInput (event)} />
    //     <button 
    //     onClick = {handleLogin}>Login</button>

    //   </form>
    //   </>
    //   }
    // </div>

    
    //   );

    // }





