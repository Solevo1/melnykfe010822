import { useEffect, useRef, useState } from 'react';
import './App.css';
import { initialInputData } from './consts';

const App = () => {
  const [chartData, setChartData] = useState(initialInputData);
  const sumTime = chartData.reduce((accumulator, object) => {
    return accumulator + object.time;
  }, 0);
  
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if(buttonRef.current) buttonRef.current.click();
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleButtonCLick = () => {
    setChartData((prevValue)=>prevValue.map((value)=>({...value, time: Number((Math.random() * 100).toFixed(1))})))
  }
  return (
    <div className="App">
      <h1 className='App-title'>Spent time(seconds)</h1>
      <ul className='chart-list'>
        {chartData.map(({name}, i)=>
          <li key={name} className='chart-item'>
            <div className='chart-item-title'>{name}</div>
            <div className='chart-container'>
              {chartData.map((value,j)=>{
                const isVisible = i===j;
                const style = {
                  backgroundColor: isVisible ? 'lightblue' : 'whitesmoke ',
                  width: value.time * 100 / sumTime + '%'
                }
                return (
                  <div className='chart-section' key={value.name} style={style}>
                    <span className='chart-label'>{isVisible && value.time}</span>
                  </div>)
              })}
            </div>
          </li>
        )}
      </ul>
      <button ref={buttonRef} onClick={handleButtonCLick}>
        Change Chart Data
      </button>
    </div>
  );
}

export default App;
