export function getMonthNumberOfDays(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getDayMothYear(date: Date) {
  return [date.getDate(), date.getMonth(), date.getFullYear()];
}

export function hasPassedMoreThanNumberOfYears(years: number, date: Date) {
  const [currentDay, currentMonth, currentYear] = getDayMothYear(new Date());
  const [givenDay, givenMonth, givenYear] = getDayMothYear(date);

  if (currentYear - givenYear < years) {
    return false;
  } else if (currentYear - givenYear === years) {
    if (currentMonth < givenMonth) {
      return false;
    } else if (currentMonth === givenMonth) {
      return givenDay <= currentDay;
    }
  }

  return true;
}
