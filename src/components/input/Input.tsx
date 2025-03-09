import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { forwardRef, InputHTMLAttributes } from 'react';
import { stringUtils } from '../../utils';
import {
  IBasicClasses,
  IStyles,
} from '../core/HOC/baseElement/baseElement.utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & IBasicClasses;

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

export default withBaseInlineElement<'input', InputProps>(
  Input as React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<'input'> & InputProps
  >,
  styles as unknown as IStyles,
);
