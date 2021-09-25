import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import Routine from './pages/Routine';
import Feed from './components/Feed';
import './App.css';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState([]);

  const fetchCurrentUser = async (username) => {
    const response = await fetch(
      `http://127.0.0.1:3001/api/v1/users/${username}`
    ).then(response => response.json());
    console.log('User from database: ', response)
    if (!response.message) {
      setCurrentUser(response)
    }
    return response;

  }

  useEffect(() => {
    if (isAuthenticated === true) {
      fetchCurrentUser(user.nickname)
    }
  }, [isAuthenticated])

  return (
    <Router>
      <div className="App">
        <Navigation currentUser={currentUser}/>
        <main>

          <Route path="/profile">
            <Profile user={user} currentUser={currentUser} isAuthenticated={isAuthenticated} />
            <Feed />
          </Route>
          <Route path="/routine">
            <Routine currentUser={currentUser}/>
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
