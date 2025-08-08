import styled from '@emotion/styled';

export const DaysGrid = styled('div')<{
  totalDays: number;
  pxPerDay: number;
}>(({ totalDays, pxPerDay }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${totalDays}, ${pxPerDay}px)`,
  alignItems: 'stretch',
  userSelect: 'none',
  fontSize: 11,
  color: '#374151',
  background: '#f9fafb',
  borderBottom: '1px solid #e5e7eb',
}));

export const MonthGrid = styled('div')<{
  totalDays: number;
  pxPerDay: number;
}>(({ totalDays, pxPerDay }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${totalDays}, ${pxPerDay}px)`,
  alignItems: 'stretch',
  userSelect: 'none',
  fontSize: 12,
  color: '#111827',
  background: '#f3f4f6',
  borderBottom: '1px solid #e5e7eb',
  fontWeight: 600,
}));

export const MonthCell = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: 28,
  paddingLeft: 6,
  paddingRight: 6,
  borderRight: '1px solid #e5e7eb',
  boxSizing: 'border-box',
});

export const DayCell = styled('div')<{ monthStart: boolean }>(
  ({ monthStart }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    borderRight: '1px solid #e5e7eb',
    borderLeft: monthStart ? '2px solid #9ca3af' : 'none',
    background: '#f9fafb',
    boxSizing: 'border-box',
  })
);

export const ItemBlock = styled('li')<{
  leftPx: number;
  widthPx: number;
  heightPx: number;
}>(({ leftPx, widthPx, heightPx }) => ({
  position: 'absolute',
  left: leftPx,
  width: widthPx,
  height: heightPx,
  borderRadius: 6,
  background: 'linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)',
  color: '#fff',
  boxShadow: '0 1px 0 rgba(0,0,0,0.05), inset 0 -1px 0 rgba(255,255,255,0.1)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  display: 'flex',
  alignItems: 'center',
}));

export const ItemLabel = styled('p')({
  fontSize: 12,
  lineHeight: 1,
  padding: '0 8px',
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textAlign: 'left',
});
