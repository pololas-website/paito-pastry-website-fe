import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { stringUtils } from './../../utils';
import { SelectHTMLAttributes } from 'react';

export interface IChangedOption {
  name: string;
  value: string;
}

type CustomProps = {
  options?: string[] | number[];
  onChange: ({ name, value }: IChangedOption) => void;
};

type SelectProps = CustomProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof CustomProps>;

function Select({ className, options = [], onChange, ...rest }: SelectProps) {
  const classNames = stringUtils.join([styles.input, className]);

  return (
    <select
      className={classNames}
      onChange={(e) => onChange({ name: e.target.name, value: e.target.value })}
      {...rest}
    >
      {options.map((option) => (
        <option key={option} label={option.toString()} value={option} />
      ))}
    </select>
  );
}

export default withBaseInlineElement(Select, styles);
