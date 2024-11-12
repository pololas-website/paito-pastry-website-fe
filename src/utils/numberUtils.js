export function getSimpleSequence(start, end) {
  try {
    return Array(end + 1 - start)
      .fill(0)
      .map((_, i) => i + start);
  } catch {
    return [];
  }
}
