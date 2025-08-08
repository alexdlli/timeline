import { useState } from 'react';
import {
  MIN_PX_PER_DAY,
  type TimeLineScreenProps,
} from './timeline-screen.model';

function useTimeLineScreenViewModel(): TimeLineScreenProps {
  const [pxPerDay, setPxPerDay] = useState(MIN_PX_PER_DAY);

  return {
    pxPerDay,
    setPxPerDay,
  };
}

export { useTimeLineScreenViewModel };
