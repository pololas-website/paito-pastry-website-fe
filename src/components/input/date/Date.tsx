import { useRef } from 'react';
import {
  getDayOptions,
  getYearOptions,
  MONTH_OPTIONS,
  getInitialDate,
  getMonthNumberOfDays,
} from './dateComponentUtils';

interface IOptionProps<T extends number | string> {
  defaultValue: T;
  options: T[];
  name: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  ref?: React.MutableRefObject<HTMLSelectElement | null>;
}

export interface IDateProps {
  children: (
    monthProps: IOptionProps<string>,
    dayProps: IOptionProps<number>,
    yearProps: IOptionProps<number>,
  ) => React.ReactElement;
}

// TODO: Test this component with React testing library
function Date({ children }: IDateProps) {
  const daySelectRef = useRef<HTMLSelectElement | null>(null);
  const monthSelectRef = useRef<HTMLSelectElement | null>(null);
  const yearSelectRef = useRef<HTMLSelectElement | null>(null);
  const { month, day, year } = getInitialDate();
  let days: number[] = [];
  const months = MONTH_OPTIONS;
  const years = getYearOptions(Number(yearSelectRef.current?.value ?? year));
  setDayOptions();

  function setDayOptions() {
    days = getDayOptions(
      monthSelectRef.current?.value ?? month,
      Number(yearSelectRef.current?.value ?? year),
    );
  }

  function handleOnMonthChange() {
    const monthDays = getMonthNumberOfDays(
      monthSelectRef.current?.value ?? month,
      Number(yearSelectRef.current?.value ?? year),
    );
    const day = Number(daySelectRef.current!.value);

    if (day > monthDays) daySelectRef.current!.value = monthDays.toString();

    setDayOptions();
  }

  const monthProps = {
    defaultValue: month,
    options: months,
    name: 'month',
    onChange: handleOnMonthChange,
    ref: monthSelectRef,
  };

  const dayProps = {
    defaultValue: day,
    options: days,
    name: 'day',
    ref: daySelectRef,
  };

  const yearProps = {
    defaultValue: year,
    options: years,
    name: 'year',
    ref: yearSelectRef,
  };

  return children(monthProps, dayProps, yearProps);
}

export default Date;
