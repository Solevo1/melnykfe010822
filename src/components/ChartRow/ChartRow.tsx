import { FC } from 'react';

import './ChartRow.css';

import { DataObject } from '../../consts';
import { countPercentPart, sumCallback } from '../../helpers';

type ChartRowProps = {
  chartData: Array<DataObject>;
  chartItem: DataObject
  index: number;
}

const ChartRow: FC<ChartRowProps> = (
  { chartData, index, chartItem: { time, name } },
) => {
  const sumTime = chartData.reduce(sumCallback, 0);
  const leftMargin = chartData.slice(0, index).reduce(sumCallback, 0);
  const rightMargin = chartData.slice(index + 1).reduce(sumCallback, 0);
  const style = {
    width: countPercentPart(time, sumTime),
    marginLeft: countPercentPart(leftMargin, sumTime),
    marginRight: countPercentPart(rightMargin, sumTime),
  };
  return (
    <li className="ChartRow">
      <div className="ChartRow-title">{name}</div>
      <div className="ChartRow-container">
        <div className="ChartRow-section" key={name} style={style}>
          <span className="ChartRow-label">{time}</span>
        </div>
      </div>
    </li>
  );
};
export default ChartRow;
