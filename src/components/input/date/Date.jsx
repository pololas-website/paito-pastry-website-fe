import { useMemo, useState } from 'react';
import { InputGroup, Select } from '../../../components';
import * as dateUtils from './dateComponentUtils';

function Date({ label, descriptionHelp }) {
  const now = dateUtils.getInitialDate();
  const [{ month, day, year }, setDate] = useState(now);
  const months = dateUtils.MONTH_OPTIONS;
  const days = useMemo(
    () => dateUtils.getDayOptions(month, year),
    [month, year],
  );
  const years = useMemo(() => dateUtils.getYearOptions(now.year), [now.year]);

  function handleSetDate({ name, value }) {
    setDate((date) => ({
      ...date,
      [name]: name === 'month' ? value : +value,
    }));
  }

  function handleOnMonthChange(updatedData) {
    const monthDays = dateUtils.getMonthNumberOfDays(month, year);

    if (day > monthDays) {
      handleSetDate({ name: 'day', value: monthDays });
    }

    handleSetDate(updatedData);
  }

  return (
    <InputGroup label={label} descriptionHelp={descriptionHelp}>
      <Select
        options={months}
        value={month}
        name="month"
        onChange={handleOnMonthChange}
      />
      <Select options={days} value={day} name="day" onChange={handleSetDate} />
      <Select
        options={years}
        value={year}
        name="year"
        onChange={handleSetDate}
      />
    </InputGroup>
  );
}

export default Date;
