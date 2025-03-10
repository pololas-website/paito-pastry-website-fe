import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { stringUtils } from './../../utils';
import { forwardRef, SelectHTMLAttributes } from 'react';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

type CustomProps = {
  options?: string[] | number[];
};

type SelectProps = CustomProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof CustomProps>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options = [], ...rest }, ref) => {
    const classNames = stringUtils.join([styles.input, className]);

    return (
      <select className={classNames} ref={ref} {...rest}>
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
