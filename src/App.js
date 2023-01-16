// import logo from './logo.svg';
import './App.css';
import Create from './components/create/Create'
import Read from './components/read/Read'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Update from './components/update/Update'
import Delete from './components/delete/Delete'

function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <h3>React CRUD Operations</h3>
        </div>

        {/* <div>
          <Read/>
        </div> */}

        <Routes>
        <Route path='/' exact element={ <Read/> }/>
        <Route path='/create' exact element={<Create/>} />
        <Route path='/update' element={<Update/>} />
        {/* <Route path='/delete' element={<Delete/>} /> */}
        </Routes>

     

         
       
      </div>
      </Router>
  );
}

export default App;
