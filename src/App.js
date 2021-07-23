import React, {useState} from 'react';
import {data} from './data'
import List from './List'

function App() {
  const[people,setPeople] = useState(data)
  return (
     <>
       <div className="main-box">
         <h3>{people.length} Birthday Today</h3>
         <List people={people}></List>
         <button className="btn" onClick={()=>setPeople([])}>Clear All</button>
       </div>
     </>
  );
}

export default App;
