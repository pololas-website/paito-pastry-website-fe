import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { forwardRef, InputHTMLAttributes } from 'react';
import { stringUtils } from '../../utils';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

interface CustomProps {
  error?: string | boolean;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & CustomProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, children, ...rest }: InputProps, ref) => {
    const classNames = stringUtils.join([styles.input, className]);

    return (
      <div>
        <div className={classNames}>
          <input {...rest} ref={ref} />
          {children}
        </div>
        {typeof error === 'string' && <span>{error}</span>}
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
