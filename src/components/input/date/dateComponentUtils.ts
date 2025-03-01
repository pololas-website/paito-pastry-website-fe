import { dateUtils, numberUtils } from '../../../utils';

export const MONTH_OPTIONS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function getInitialDate() {
  const today = new Date();
  return {
    month: today.toLocaleString('default', { month: 'short' }),
    day: today.getDate(),
    year: today.getFullYear(),
  };
}

export function getDayOptions(monthName: string, year: number) {
  const numberOfDays = getMonthNumberOfDays(monthName, year);
  return numberUtils.getSimpleSequence(1, numberOfDays);
}

export function getYearOptions(currentYear: number) {
  return numberUtils
    .getSimpleSequence(currentYear - 110, currentYear)
    .reverse();
}

export function getMonthNumberOfDays(monthName: string, year: number) {
  const monthNumber = MONTH_OPTIONS.findIndex((m) => m === monthName);
  return dateUtils.getMonthNumberOfDays(monthNumber, year);
}
