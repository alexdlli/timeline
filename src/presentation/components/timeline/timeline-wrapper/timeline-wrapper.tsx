import type { TimeLineViewModelParams } from './timeline-wrapper-view.model';
import { useTimeLineViewViewModel } from './timeline-wrapper-viewmodel';
import { TimeLineWrapperView } from './timeline-wrapper.view';

function TimeLineWrapper({ pxPerDay }: TimeLineViewModelParams) {
  const props = useTimeLineViewViewModel({ pxPerDay });

  return <TimeLineWrapperView {...props} />;
}

export { TimeLineWrapper };
