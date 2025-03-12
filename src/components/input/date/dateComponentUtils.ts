import { useEffect, useRef } from 'react';
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

export interface IDateValue {
  month: string;
  day: number;
  year: number;
}

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

// TODO: make a stronger id with uuid.
export const DATE_IDS = {
  month: 'dateComponent-monthId',
  day: 'dateComponent-dayId',
  year: 'dateComponent-yearId',
};

/**
 * Get the Date Select components dom references to work without React refs.
 * @param daySelectId
 * @param monthSelectId
 * @param yearSelectId
 * @returns
 */
export function useGetComponentsRefs(
  daySelectId: string,
  monthSelectId: string,
  yearSelectId: string,
) {
  const dayRef = useRef<HTMLSelectElement | null>(null);
  const monthRef = useRef<HTMLSelectElement | null>(null);
  const yearRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    dayRef.current = document.getElementById(daySelectId) as HTMLSelectElement;
    monthRef.current = document.getElementById(
      monthSelectId,
    ) as HTMLSelectElement;
    yearRef.current = document.getElementById(
      yearSelectId,
    ) as HTMLSelectElement;
  }, [daySelectId, monthSelectId, yearSelectId]);

  return [dayRef, monthRef, yearRef];
}
