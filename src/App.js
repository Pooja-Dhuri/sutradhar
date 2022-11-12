import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import List from './components/List';

function App() {
  
  // console.log(arr)
  //  const ref=useRef()
   
  // function handleEnter(event) {
  //   if (event.keyCode === 13) {
  //     const form = event.target.form;
  //     const index = Array.prototype.indexOf.call(form, event.target);
  //     form.elements[index + 1].focus();
  //     event.preventDefault();
  //   }
  // }

  
  return (
    <div className="App">
     <List/>
    </div>
  );
}

export default App;
