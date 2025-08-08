import { TimeLineScreenView } from './timeline-screen.view';
import { useTimeLineScreenViewModel } from './timeline-screen.viewmodel';

function TimeLineScreen() {
  const props = useTimeLineScreenViewModel();

  return <TimeLineScreenView {...props} />;
}

export { TimeLineScreen };
