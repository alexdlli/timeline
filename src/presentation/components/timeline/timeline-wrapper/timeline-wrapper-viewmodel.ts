import { useGetAllItems } from '@/presentation/hooks/useGetAllItems';
import type { TimeLineItem } from '@/types/timeLineItem';
import { assignLanes } from '@/utils/assignLanes';
import { computeMonthSegments } from '@/utils/computeMonthSegments';
import { daysBetweenInclusive } from '@/utils/daysBetweenInclusive';
import { endOfMonth } from '@/utils/endOfMonth';
import { enumerateDaysInclusive } from '@/utils/enumerateDaysInclusive';
import { parseDate } from '@/utils/parseDate';
import { startOfMonth } from '@/utils/startOfMonth';
import type {
  TimeLineViewModel,
  TimeLineViewModelParams,
} from './timeline-wrapper-view.model';

function useTimeLineViewViewModel({
  pxPerDay,
}: TimeLineViewModelParams): TimeLineViewModel {
  const { data: timelineItems } = useGetAllItems();

  const laneGapPx = 10;
  const laneHeightPx = 32;

  const minStart = timelineItems.reduce<string>(
    (min, it) => (parseDate(it.start) < parseDate(min) ? it.start : min),
    timelineItems[0].start
  );
  const maxEnd = timelineItems.reduce<string>(
    (max, it) => (parseDate(it.end) > parseDate(max) ? it.end : max),
    timelineItems[0].end
  );

  const headerStart = startOfMonth(minStart);
  const headerEnd = endOfMonth(maxEnd);
  const totalDays = daysBetweenInclusive(headerStart, headerEnd);
  const totalWidthPx = totalDays * pxPerDay + laneGapPx * 2;
  const days = enumerateDaysInclusive(headerStart, headerEnd);
  const monthSegments = computeMonthSegments(days);

  const lanes = assignLanes(timelineItems) as TimeLineItem[][];

  return {
    items: lanes,
    laneGapPx,
    totalWidthPx,
    laneHeightPx,
    pxPerDay,
    totalDays,
    headerStart,
    monthSegments,
    days,
  };
}

export { useTimeLineViewViewModel };
