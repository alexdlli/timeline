import { daysBetweenInclusive } from '@/utils/daysBetweenInclusive';
import { daysDiff } from '@/utils/daysDiff';
import { isMonthStart } from '@/utils/isMonthStart';
import { labelForDay } from '@/utils/labelForDay';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  DayCell,
  HeaderGrid,
  ItemBlock,
  ItemLabel,
  MonthCell,
  MonthGrid,
} from '../timeline-item/timeline-item.view';
import type { TimeLineViewModel } from './timeline-wrapper-view.model';

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: '#fff',
});

const Lanes = styled('div')<{ totalWidthPx: number; laneGapPx: number }>(
  ({ totalWidthPx, laneGapPx }) => ({
    position: 'relative',
    minWidth: totalWidthPx,
    padding: `${laneGapPx}px`,
    boxSizing: 'border-box',
  })
);

const LaneRow = styled('div')<{ heightPx: number; gapPx: number }>(
  ({ heightPx, gapPx }) => ({
    position: 'relative',
    display: 'block',
    height: heightPx,
    marginBottom: gapPx,
  })
);

function TimeLineWrapperView({
  items,
  laneGapPx,
  totalWidthPx,
  laneHeightPx,
  pxPerDay,
  totalDays,
  monthSegments,
  headerStart,
  days,
}: TimeLineViewModel) {
  return (
    <Container aria-label="Project timeline">
      <Lanes laneGapPx={laneGapPx} totalWidthPx={totalWidthPx}>
        <MonthGrid
          aria-label="Months header"
          pxPerDay={pxPerDay}
          totalDays={totalDays}
        >
          {monthSegments.map((seg) => (
            <MonthCell key={seg.key} style={{ gridColumn: `span ${seg.span}` }}>
              {seg.label}
            </MonthCell>
          ))}
        </MonthGrid>
        <HeaderGrid
          aria-label="Days header"
          pxPerDay={pxPerDay}
          totalDays={totalDays}
        >
          {days.map((d) => (
            <DayCell
              aria-label={d.toDateString()}
              key={d.toISOString()}
              monthStart={isMonthStart(d)}
              title={d.toDateString()}
            >
              {labelForDay(d)}
            </DayCell>
          ))}
        </HeaderGrid>
        <div css={css({ height: 6 })} />
        {items.map((laneItems, laneIndex) => {
          const laneKey =
            laneItems.map((it) => String(it.id)).join('-') ||
            `lane-${laneIndex}`;
          const computed = laneItems.map((item) => {
            const leftPx = Math.max(
              0,
              daysDiff(item.start, headerStart) * pxPerDay
            );
            const widthPx = Math.max(
              1,
              daysBetweenInclusive(item.start, item.end) * pxPerDay
            );
            return { item, leftPx, widthPx };
          });

          return (
            <LaneRow gapPx={laneGapPx} heightPx={laneHeightPx} key={laneKey}>
              {computed.map(({ item, leftPx, widthPx }) => (
                <ItemBlock
                  aria-label={`${item.name}, ${item.start} to ${item.end}`}
                  heightPx={laneHeightPx}
                  key={item.id}
                  leftPx={leftPx}
                  title={`${item.name} — ${item.start} → ${item.end}`}
                  widthPx={widthPx}
                >
                  <ItemLabel title={item.name}>{item.name}</ItemLabel>
                </ItemBlock>
              ))}
            </LaneRow>
          );
        })}
      </Lanes>
    </Container>
  );
}

export { TimeLineWrapperView };
