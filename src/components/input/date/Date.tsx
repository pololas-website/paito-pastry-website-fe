import {
  getDayOptions,
  getYearOptions,
  MONTH_OPTIONS,
  getInitialDate,
  getMonthNumberOfDays,
  useGetComponentsRefs,
  DATE_IDS,
} from './dateComponentUtils';

interface IOptionProps<T extends number | string> {
  defaultValue: T;
  options: T[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
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
  const [daySelectRef, monthSelectRef, yearSelectRef] = useGetComponentsRefs(
    DATE_IDS.day,
    DATE_IDS.month,
    DATE_IDS.year,
  );
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
    onChange: handleOnMonthChange,
    id: DATE_IDS.month,
  };

  const dayProps = {
    defaultValue: day,
    options: days,
    id: DATE_IDS.day,
  };

  const yearProps = {
    defaultValue: year,
    options: years,
    id: DATE_IDS.year,
  };

  return children(monthProps, dayProps, yearProps);
}

export default Date;
