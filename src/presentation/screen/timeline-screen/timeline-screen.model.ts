export interface TimeLineScreenProps {
  pxPerDay: number;
  setPxPerDay: (value: number) => void;
}

export const MIN_PX_PER_DAY = 20;
export const MAX_PX_PER_DAY = 60;
