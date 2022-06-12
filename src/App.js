import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Todo from './components/Todo'
import RequiredAuth from './hoc/RequiredAuth'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/todo' element={<RequiredAuth> <Todo></Todo></RequiredAuth>
      
      }></Route>
      </Routes>
    </div>
  );
}

export default App;
