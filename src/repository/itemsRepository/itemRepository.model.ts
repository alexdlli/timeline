import type { TimeLineItem } from '@/types/timeLineItem';

export interface itemsRepository {
  getAll: () => TimeLineItem[];
}
