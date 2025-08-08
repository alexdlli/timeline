import { padTo2Digits } from './padTo2Digits';
import { parseDate } from './parseDate';

export function endOfMonth(date: string): string {
  const d = parseDate(date);
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  return `${last.getFullYear()}-${padTo2Digits(last.getMonth() + 1)}-${padTo2Digits(last.getDate())}`;
}
