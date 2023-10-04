import './App.css';
import MainBox from './compnents/main';
import SideStrip from './compnents/sideStrip';
import SubNav from './compnents/userSetting';

function App() {
  return (
    <div className="App">
      <SideStrip />
      <SubNav />
      <MainBox />
    </div>
  );
}

export default App;
