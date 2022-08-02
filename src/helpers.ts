import { DataObject } from './consts';

export const sumCallback = (
  accumulator: number,
  object: DataObject,
) => accumulator + object.time;

export const countPercentPart = (
  part: number,
  whole: number,
) => `${(part * 100) / whole}%`;
