import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { forwardRef, InputHTMLAttributes } from 'react';
import { stringUtils } from '../../utils';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

interface CustomProps {
  short?: boolean;
  error?: string | boolean;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & CustomProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ short, error, className, children, size, ...rest }: InputProps, ref) => {
    const classNames = stringUtils.join([styles.input, className]);
    const isErrorMessageActivated = error && typeof error === 'string';

    return (
      <div>
        <div className={classNames}>
          <input ref={ref} size={short ? 1 : size} {...rest} />
          {error && (
            <i
              className={`fa-solid fa-circle-exclamation ${styles['icon-error']}`}
            ></i>
          )}
          {children}
        </div>
        {isErrorMessageActivated && <span>{error}</span>}
      </div>
    );
  },
);

export default withBaseInlineElement<'input', InputProps>(
  Input as React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<'input'> & InputProps
  >,
  styles as unknown as IStyles,
);
