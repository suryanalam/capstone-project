import './App.css';
import MainContainer from './main/MainContainer';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <div className='body-container'>
          <Navbar />
          <MainContainer />
        </div>
    </div>
  );
}

export default App;
