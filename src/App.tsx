import {
  FC, useEffect, useRef, useState,
} from 'react';
import './App.css';
import ChartRow from './components/ChartRow/ChartRow';

import { DataObject, initialInputData } from './consts';

const App: FC = () => {
  const
    [chartData, setChartData] = useState<Array<DataObject>>(initialInputData);

  const handleButtonCLick = () => {
    setChartData(
      (prevValue) => prevValue.map((value) => (
        { ...value, time: Number((Math.random() * 100).toFixed(1)) })),
    );
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      if (buttonRef.current) buttonRef.current.click();
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1 className="App-title">Spent time(seconds)</h1>
      <ul className="App-list">
        {chartData.map((chartItem, index) => (
          <ChartRow
            key={chartItem.name}
            chartData={chartData}
            chartItem={chartItem}
            index={index}
          />
        ))}
      </ul>
      <button type="button" ref={buttonRef} onClick={handleButtonCLick}>
        Change Chart Data
      </button>
    </div>
  );
};

export default App;
