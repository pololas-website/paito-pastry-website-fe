import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { stringUtils } from './../../utils';
import { forwardRef, SelectHTMLAttributes } from 'react';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

type CustomProps = {
  options?: string[] | number[];
  error?: string | boolean;
};

type SelectProps = CustomProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof CustomProps>;

// TODO: Analize the posibility to group all the common properties in another HOC
//        of common inputs like: select, input, dropdown(custom), textArea(maybe)
//        Properties like: error(for default error message);
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options = [], error, ...rest }, ref) => {
    const classNames = stringUtils.join([styles.input, className]);

    return (
      <>
        <select className={classNames} ref={ref} {...rest}>
          {options.map((option) => (
            <option key={option} label={option.toString()} value={option} />
          ))}
        </select>
        {typeof error === 'string' && <span>{error}</span>}
      </>
    );
  },
);

export default withBaseInlineElement<'select', SelectProps>(
  Select as React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<'select'> & SelectProps
  >,
  styles as unknown as IStyles,
);
