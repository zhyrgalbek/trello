import './App.css';
import Authorization from './Components/Authorization/Autorization';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';


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
       <Authorization/> 
      </div>
    );
  }
}

export default App;
