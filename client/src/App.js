import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './pages/Profile';
import Routine from './pages/Routine';
import Feed from './components/Feed';
import './App.css';

function App() {
  const { user, isAuthenticated } = useAuth0();

  const fetchCurrentUser = async (username) => {
    const response = await fetch(
      `http://127.0.0.1:3001/api/v1/users/${username}`
    ).then(response => response.json());
    console.log(response)
  }

  useEffect(() => {
    if (isAuthenticated === true) {
      fetchCurrentUser(user.nickname)
      console.log(user.nickname)
    }
  })

  return (
    <Router>
      <div className="App">
        <Route path="/profile">
          <Profile currentUser={user} isAuthenticated={isAuthenticated}/>
          <Feed />
        </Route>
        <Route path="/routine">
          <Routine />
        </Route>
        <LoginButton />
        <LogoutButton />
      </div>
    </Router>
  );
}

export default App;
