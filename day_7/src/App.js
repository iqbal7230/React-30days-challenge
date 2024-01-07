import './App.css';

import React from 'react'

export default function App() {
  return (
    <div className='logo-box'>
      
      <h2>Sign In to Mypage</h2>
      <button>
        <img src='./images.png' alt='google' className='g-logo'/>
        Sign in with Google
      </button>
      <button>
        <img src="./download.png" alt="apple" />
        Sign in with Apple
      </button>
      <hr></hr>
      <span>Or</span>
      <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't Have an account <a>Sign up</a>
      </p>
    </div>
  )
}
