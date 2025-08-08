import { padTo2Digits } from './padTo2Digits';
import { parseDate } from './parseDate';

function startOfMonth(date: string): string {
  const d = parseDate(date);
  return `${d.getFullYear()}-${padTo2Digits(d.getMonth() + 1)}-01`;
}

export { startOfMonth };
