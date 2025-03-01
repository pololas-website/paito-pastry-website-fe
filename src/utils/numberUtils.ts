export function getSimpleSequence(start: number, end: number) {
  try {
    return Array(end + 1 - start)
      .fill(0)
      .map((_, i) => i + start);
  } catch {
    return [];
  }
}
