function formatMonthLabel(date: Date): string {
  return date.toLocaleString(undefined, { month: 'short', year: 'numeric' });
}

export { formatMonthLabel };
