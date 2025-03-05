import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { forwardRef, InputHTMLAttributes } from 'react';
import { stringUtils } from '../../utils';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...rest }: InputProps, ref) => {
    const classNames = stringUtils.join([styles.input, className]);

    if (children)
      return (
        <span className={classNames}>
          <input {...rest} ref={ref} />
          {children}
        </span>
      );

    return <input className={classNames} {...rest} />;
  },
);

export default withBaseInlineElement(Input, styles as unknown as IStyles);
