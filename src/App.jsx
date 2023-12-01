
// import './App.css'

// function App() {


//   return (
//     <>
//       <h2>hdnf</h2>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const SignIn = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Validate username and password, then perform sign-in
    signIn({ username, password });
    // You can implement API calls or any authentication mechanism here
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
