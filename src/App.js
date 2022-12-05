import { useState } from 'react';
import './App.css';

function App() {

  const [points, setPoints] = useState([]);
  const [data, setData] = useState([]);
  const clickHandle = (e) => {
    console.log(e.clientX, e.clientY);
    setPoints(points => [...points, 
      {
        x: e.clientX,
        y: e.clientY
      }
    ]); 
    setData([])
  }
  const redoHandle = (e) => {
    e.stopPropagation();
    const data =[...points];
    const item =data.pop();
    setData(data => [...data, item]); 
    setPoints(data);
  }
  const undoHandle = (e) => {
    e.stopPropagation();
    const d=[...data];
    const item =d.pop();
    setPoints(points => [...points, item]);
    setData(d);

  }
  return (
    <div className="screen" onClick={clickHandle}>
      <header className='header'>
        <button onClick={redoHandle} disabled ={points.length==0}>redo</button>
        <button onClick={undoHandle} disabled = {data.length==0}>undo</button>
      </header>
      {points.map((point, index) => (
        <div className="point" key={index} style={{top: point.y, left: point.x}}></div>
      ))}
    </div>
  );
}

export default App;
