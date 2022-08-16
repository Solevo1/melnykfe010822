import { FC } from 'react';

import './ChartRow.css';

import { DataObject } from '../../consts';
import { countPercentPart, sumCallback } from '../../helpers';

type ChartRowProps = {
  chartData: Array<DataObject>;
  chartItem: DataObject
  index: number;
  sumTime: number;
}

const ChartRow: FC<ChartRowProps> = ({
  chartData, index, chartItem: { time, name }, sumTime,
}) => {
  const leftMargin = chartData.slice(0, index).reduce(sumCallback, 0);
  const chartSectionStyle = {
    width: countPercentPart(time, sumTime),
    marginLeft: countPercentPart(leftMargin, sumTime),
  };
  return (
    <li className="ChartRow">
      <div className="ChartRow-title">{name}</div>
      <div className="ChartRow-container">
        <div className="ChartRow-section" style={chartSectionStyle}>
          <span className="ChartRow-label">{time}</span>
        </div>
      </div>
    </li>
  );
};
export default ChartRow;
