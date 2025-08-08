import type { MonthSegment } from '@/types/MouthSegment';
import type { TimeLineItem } from '@/types/timeLineItem';

export interface TimeLineViewModelParams {
  pxPerDay: number;
}

export interface TimeLineViewModel {
  items: TimeLineItem[][];
  laneGapPx: number;
  totalWidthPx: number;
  laneHeightPx: number;
  pxPerDay: number;
  totalDays: number;
  monthSegments: MonthSegment[];
  dates: Date[];
  headerStart: string;
}
