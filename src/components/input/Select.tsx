import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { stringUtils } from './../../utils';
import { forwardRef, SelectHTMLAttributes } from 'react';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';
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

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options = [], onChange, ...rest }, ref) => {
    const classNames = stringUtils.join([styles.input, className]);

    return (
      <select
        className={classNames}
        onChange={(e) =>
          onChange({ name: e.target.name, value: e.target.value })
        }
        ref={ref}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} label={option.toString()} value={option} />
        ))}
      </select>
    );
  },
);

export default withBaseInlineElement<'select', SelectProps>(
  Select as React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<'select'> & SelectProps
  >,
  styles as unknown as IStyles,
);
