import type { TimeLineItem } from '../types/timeLineItem';

/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
function assignLanes(items: TimeLineItem[]) {
  const sortedItems = items.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
  const lanes: TimeLineItem[][] = [];

  function assignItemToLane(item: TimeLineItem) {
    for (const lane of lanes) {
      const lastLane = lane.at(-1);
      if (lastLane && new Date(lastLane.end) < new Date(item.start)) {
        lane.push(item);
        return;
      }
    }
    lanes.push([item]);
  }

  for (const item of sortedItems) {
    assignItemToLane(item);
  }
  return lanes;
}

export { assignLanes };
