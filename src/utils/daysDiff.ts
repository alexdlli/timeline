import { parseDate } from './parseDate';

function daysDiff(a: string, b: string): number {
  const start = parseDate(a);
  const end = parseDate(b);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((start.getTime() - end.getTime()) / msPerDay);
}

export { daysDiff };
