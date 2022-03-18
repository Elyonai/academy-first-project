import './App.css';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Login/>
    </div>
  );
}

export default App;
