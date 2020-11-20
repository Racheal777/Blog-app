import React from 'react';
import{Link} from 'react-router-dom'
import '../Styles.css'
import '../SignInStyles.css'



function SignIn (){
    
    
    return (
        <div>
            <div className = "auth">
            <h1 className="the"><span>Lets Travel Together</span></h1>
                <h1 className="text-center">Create Account</h1>
                <form>
         <label className='me'>FirstName</label><br/>
         <input type="firstname" Placeholder= 'First Name'/><br/>

         <label className="me">Surname</label><br/>
         <input type="surname" Placeholder= 'Surname'/><br/>
         <label className='me'>Email:</label><br/>
         <input type ='email' Placeholder = 'Please enter your email'/><br/>
         <label className='me'> Username</label><br/>
         <input type="username" Placeholder='Username'/><br/>
         
         <label className='me'>Password:</label><br/>
         <input type ='text' Placeholder = ' Please enter your password'/><br/>
         <label className='me'> Confirm Password:</label><br/>
         <input type ='text' Placeholder = 'Confirm Password'/><br/>
            <button>Submit</button>
            <p className='sea'> Have an account <br/> </p>
            <Link to ='./Login'><p className='sea'>Login</p></Link>
            </form>
            
            </div>

         </div>

        
        
    )
}

export default SignIn;