import type { MonthSegment } from '@/types/MouthSegment';
import { formatMonthLabel } from './formatMonthLabel';

function computeMonthSegments(days: Date[]): MonthSegment[] {
  if (days.length === 0) {
    return [];
  }
  const segments: MonthSegment[] = [];
  let currentMonth = days[0].getMonth();
  let currentYear = days[0].getFullYear();
  let span = 0;
  for (const d of days) {
    const m = d.getMonth();
    const y = d.getFullYear();
    if (m === currentMonth && y === currentYear) {
      span += 1;
      continue;
    }
    const labelDate = new Date(currentYear, currentMonth, 1);
    segments.push({
      key: `${currentYear}-${currentMonth + 1}`,
      label: formatMonthLabel(labelDate),
      span,
    });
    currentMonth = m;
    currentYear = y;
    span = 1;
  }
  const labelDate = new Date(currentYear, currentMonth, 1);
  segments.push({
    key: `${currentYear}-${currentMonth + 1}`,
    label: formatMonthLabel(labelDate),
    span,
  });
  return segments;
}

export { computeMonthSegments };
