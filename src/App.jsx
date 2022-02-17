import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';
import Home from './pages/Home';
import ShowUser from './pages/ShowUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update/:id' element={<UpdateUser />} />
        <Route path='/show/:id' element={<ShowUser />} />
      </Routes>
    </Router>
  );
}

export default App;