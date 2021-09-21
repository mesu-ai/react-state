import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">


      <Counter></Counter>



    </div>
  );
}


function Counter() {

 const [count,setCount] =useState(0);

 const IncreaseCount=()=>{
   const newCount=count+1;
   setCount(newCount);
   
 }

const DecreaseCount=()=>setCount(count-1);


  return (

    <div>
      <h3>Count: {count} </h3>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>

  );



}

export default App;
