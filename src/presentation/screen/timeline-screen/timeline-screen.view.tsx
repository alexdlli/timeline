import { css } from '@emotion/react';
import { TimeLineWrapper } from '../../components/timeline/timeline-wrapper/timeline-wrapper';
import {
  MAX_PX_PER_DAY,
  MIN_PX_PER_DAY,
  type TimeLineScreenProps,
} from './timeline-screen.model';

function TimeLineScreenView({ pxPerDay, setPxPerDay }: TimeLineScreenProps) {
  return (
    <div
      css={css`
        margin-top: 24px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        `}
      >
        <label css={css({ fontSize: 14 })} htmlFor="zoom">
          Zoom
        </label>
        <input
          aria-label="Zoom timeline"
          id="zoom"
          max={MAX_PX_PER_DAY}
          min={MIN_PX_PER_DAY}
          onChange={(e) => setPxPerDay(Number(e.currentTarget.value))}
          step={1}
          type="range"
          value={pxPerDay}
        />
        <output css={css({ fontSize: 12 })}>{pxPerDay}px/day</output>
      </div>
      <TimeLineWrapper pxPerDay={pxPerDay} />
    </div>
  );
}

export { TimeLineScreenView };
