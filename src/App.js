import './App.css';
import Authorization from './Components/Authorization/Autorization';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import Profile from './Components/Profile/Profile';


function App() {
  const store = useSelector(state => state.user.spiner)
  const bool = useSelector(state => state.user.bool)
  if(store) {

    return (
      <div className="App">
        <CircularProgress/>
      </div>
    );
    
  }
  if(bool) {
    return (
      <div className="App">
        <Authorization/>
      </div>
    )
  }else{
    
    return (
      <div className="App">
       <Profile />
      </div>
    );
  }

}

export default App;
