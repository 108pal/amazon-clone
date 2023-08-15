import React ,{ useState } from 'react'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import logo from './assets/icons/amazon-logo.png'
import { auth } from './firebase1'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate=useNavigate();
    const [ email,setEmail ] =useState('');
    const [ password,setPassword ]=useState('');

    const signIn= (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        if(user){
            navigate('/')
        }
        })
        .catch((error) => {
            alert(error.message)
            console.log('not logged')
        
    // ..
    });
       
    };


    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       if(user){
           navigate('/')
       }
       
       })
       .catch((error) => {
           alert(error.message)
           console.log('not logged')
        });
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo}
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange ={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={ signIn } type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )

}


export default Login
