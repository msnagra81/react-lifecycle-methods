import logo from './logo.svg';
import './App.css';
import LifecycleMethods from './components/LifecycleMethods';
import React, { useState } from 'react';

// var mount=false;

  //create your forceUpdate hook
// function useForceUpdate(){
//     mount = !mount
//     const [value, setValue] = useState(0); // integer state
//     return () => setValue(value => ++value); // update the state to force render
//   }
  
function App(props) {
  const [mount, setValue] = useState(false);

// const forceUpdate = useForceUpdate();


  // const handleMount=()=>{
  //   console.log('Handle Mount Executed')
  //    mount = !mount
  //    useForceUpdate();
  // }
  return (
    <div>
      <button onClick={()=>setValue(!mount)}>Mount Component : LifecycleMethods</button>
      {(mount) ? <LifecycleMethods/>: <div></div>}
    </div>
  );
}

export default App;
