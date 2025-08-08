import { daysBetweenInclusive } from './daysBetweenInclusive';
import { parseDate } from './parseDate';

function enumerateDaysInclusive(start: string, end: string): Date[] {
  const result: Date[] = [];
  const startDate = parseDate(start);
  const count = daysBetweenInclusive(start, end);
  const msPerDay = 24 * 60 * 60 * 1000;
  for (let i = 0; i < count; i += 1) {
    result.push(new Date(startDate.getTime() + i * msPerDay));
  }
  return result;
}

export { enumerateDaysInclusive };
