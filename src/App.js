import { useSelector } from 'react-redux';
import Login from './app/Login';
import { selectAuthenticated} from './redux/userSlice';
import Success from './app/Success';

function App() {

  const authenticated = useSelector(selectAuthenticated);
  return (
    <div>

     {authenticated ? <Success/> : <Login/>}

    </div>
  );
}

export default App;
