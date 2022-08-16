import {
  FC, useEffect, useState,
} from 'react';
import './App.css';
import ChartRow from './components/ChartRow/ChartRow';

import { DataObject, initialInputData } from './consts';
import { sumCallback } from './helpers';

const App: FC = () => {
  const
    [chartData, setChartData] = useState<Array<DataObject>>(initialInputData);

  const handleButtonCLick = () => {
    setChartData(
      (prevValue) => prevValue.map((value) => (
        { ...value, time: Number((Math.random() * 100).toFixed(1)) })),
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => handleButtonCLick(), 30000);
    return () => clearTimeout(timer);
  }, [chartData]);

  const sumTime = chartData.reduce(sumCallback, 0);

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
            sumTime={sumTime}
          />
        ))}
      </ul>
      <button type="button" onClick={handleButtonCLick}>
        Change Chart Data
      </button>
    </div>
  );
};

export default App;
