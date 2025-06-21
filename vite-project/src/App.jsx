import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItem.jsx";



function App() {
  return (
    <Router>
      <div className="p-4  text-white bg-slate-900 flex gap-4">
        <Link to="/" className='bg-red-500'>View Items</Link>
        <Link to="/add" className='bg-green-600 rounded-'>Add Item</Link>
       
      </div>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
