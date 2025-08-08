import type { MonthSegment } from '@/types/MouthSegment';
import { formatMonthLabel } from './formatMonthLabel';

function computeMonthSegments(dates: Date[]): MonthSegment[] {
  if (dates.length === 0) {
    return [];
  }
  const segments: MonthSegment[] = [];
  let currentMonth = dates[0].getMonth();
  let currentYear = dates[0].getFullYear();
  let span = 0;
  for (const d of dates) {
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
