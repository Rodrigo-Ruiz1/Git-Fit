import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './pages/Profile';
import Feed from './components/Feed';
import './App.css';

function App() {
  const { user } = useAuth0();

  return (
    <Router>
      <div className="App">
        <Route path="/profile">
          <Profile currentUser={user}/>
          <Feed />
        </Route>
        <LoginButton />
        <LogoutButton />
      </div>
    </Router>
  );
}

export default App;
