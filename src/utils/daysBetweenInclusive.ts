import { parseDate } from './parseDate';

function daysBetweenInclusive(a: string, b: string): number {
  const start = parseDate(a);
  const end = parseDate(b);
  const msPerDay = 24 * 60 * 60 * 1000;
  const delta = Math.ceil((end.getTime() - start.getTime()) / msPerDay);
  return delta + 1;
}

export { daysBetweenInclusive };
