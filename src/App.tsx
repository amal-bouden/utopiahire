import { useState } from 'react';
import Signin from '../components/Signin.jsx';
import Signup from '../components/Signup.jsx';
import Dashboard from '../components/Dashboard.jsx';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('signin');

  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <button onClick={() => setActiveScreen('signin')}>Sign In</button>
        <button onClick={() => setActiveScreen('signup')}>Sign Up</button>
        <button onClick={() => setActiveScreen('dashboard')}>Dashboard</button>
      </nav>

      <div className="p-4">
        {activeScreen === 'signin' && <Signin />}
        {activeScreen === 'signup' && <Signup />}
        {activeScreen === 'dashboard' && <Dashboard />}
      </div>
    </div>
  );
};

export default App;
