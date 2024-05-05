import React from 'react';
import Nav from './Nav';
import LoginForm from './LoginForm' //imports LoginForm.jsx
import './App.css'//Imports the css for App.jsx
import './Nav.css'

function App (){
  return (
    <div className='App'>
      <Nav/>
      {/* I struggled so much because I forgot to add the closing tag to Nav */}
      <h1>Welcome</h1>
      <LoginForm />
    </div>
  )
}


export default App; //Makes this "available to import" for other files