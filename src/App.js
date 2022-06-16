import './App.css';
import Authorization from './Components/Authorization/Autorization';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import Profile from './Components/Profile/Profile';
import { style } from '@mui/system';
import styled from 'styled-components';


function App() {
  const store = useSelector(state => state.user.spiner)
  const proverkaLogin = useSelector(state => state.user.proverkaLogin)

  if(store) {

    return (
      <div className="App">
        <Div>
        <CircularProgress/>
        </Div>
      </div>
    );
    
  }
  if(!proverkaLogin) {
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


const Div = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`