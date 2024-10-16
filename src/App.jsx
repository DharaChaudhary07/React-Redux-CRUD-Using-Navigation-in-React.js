import React from 'react';
import { Route, Routes } from 'react-router';
import View from './Components/View/View';
import AddForm from './Components/AddForm/AddForm';
import Update from './Components/Update/Update';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';


function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/add-form' element={<AddForm/>}/>
          <Route path='/view-data' element={<View/>}/>  
          <Route path='/update' element={<Update/>}/>     
      </Routes>
    </>
  )
}

export default App;