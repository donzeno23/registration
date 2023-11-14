// import './App.css';
import logo from './images/129Connections.png';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-image: url(${logo});
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <AccountBox/>
      </AppContainer>
    </div>
  );
}

export default App;
