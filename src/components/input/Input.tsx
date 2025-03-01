import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { InputHTMLAttributes } from 'react';
import { stringUtils } from '../../utils';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ className, children, ...rest }: InputProps) {
  const classNames = stringUtils.join([styles.input, className]);

  if (children)
    return (
      <span className={classNames}>
        <input {...rest} />
        {children}
      </span>
    );

  return <input className={classNames} {...rest} />;
}

export default withBaseInlineElement(Input, styles as unknown as IStyles);
