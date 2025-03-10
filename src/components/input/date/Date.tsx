import { useMemo, useState } from 'react';
import * as dateUtils from './dateComponentUtils';
import { IChangedOption } from '../Select';

interface IOptionProps<T extends number | string> {
  options: T[];
  value: T;
  name: string;
  onChange: ({ name, value }: IChangedOption) => void;
}

interface IDateProps {
  children: (
    monthProps: IOptionProps<string>,
    dayProps: IOptionProps<number>,
    yearProps: IOptionProps<number>,
  ) => React.ReactElement;
}

function Date({ children }: IDateProps) {
  const now = dateUtils.getInitialDate();
  const [{ month, day, year }, setDate] = useState(now);
  const months = dateUtils.MONTH_OPTIONS;
  const days = useMemo(
    () => dateUtils.getDayOptions(month, year),
    [month, year],
  );
  const years = useMemo(() => dateUtils.getYearOptions(now.year), [now.year]);

  function handleSetDate({ name, value }: IChangedOption) {
    setDate((date) => ({
      ...date,
      [name]: name === 'month' ? value : +value,
    }));
  }

  function handleOnMonthChange(updatedData: IChangedOption) {
    const monthDays = dateUtils.getMonthNumberOfDays(month, year);

    if (day > monthDays) {
      handleSetDate({ name: 'day', value: monthDays.toString() });
    }

    handleSetDate(updatedData);
  }

  const monthProps = {
    options: months,
    value: month,
    name: 'month',
    onChange: handleOnMonthChange,
  };

  const dayProps = {
    options: days,
    value: day,
    name: 'day',
    onChange: handleSetDate,
  };

  const yearProps = {
    options: years,
    value: year,
    name: 'year',
    onChange: handleSetDate,
  };

  return children(monthProps, dayProps, yearProps);
}

export default Date;
