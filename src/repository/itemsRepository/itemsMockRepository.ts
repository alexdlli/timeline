import { timelineItems } from '@/mocks/timelineItems';
import type { TimeLineItem } from '@/types/timeLineItem';

const mockItems: TimeLineItem[] = [...timelineItems];

const itemsMockRepository = {
  getAll: () => mockItems,
};

export { itemsMockRepository };
