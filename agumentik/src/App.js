import logo from './logo.svg';
import './App.css';
import Allroutes from './route/Allroutes';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
     <Allroutes/>
    </div>
  );
}

export default App;
