import { Container, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FetchUserButton from './components/FetchUserButton';
import UserCard from './components/UserCard';
import LoadingSpinner from './components/LoadingSpinner';
import { useState } from 'react';
import { showError } from './components/ErrorToast';
import { delay } from './utils/delay';

type UserData = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
  location: {
    city: string;
    country: string;
  };
}

function App() {

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  const urlApi = 'https://randomuser.me/api/'

  const fetchUser = async () => {
    setLoading(true);
    setUser(null);
    
    try {
      const response = await fetch(urlApi);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      await delay(1500);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
      showError('Failed to fetch user data');
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="sm"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    }}
    >
      <Typography variant="h4" gutterBottom>
        Random User Fetcher
      </Typography>
      <ToastContainer/>
      {loading && <LoadingSpinner />}
      {user && <UserCard user={user} />}
      <FetchUserButton onClick={fetchUser} loading={loading} />
    </Container>
  )
}

export default App
