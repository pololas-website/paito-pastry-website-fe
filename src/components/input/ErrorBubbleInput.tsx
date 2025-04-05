import { forwardRef } from 'react';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { Input, InputProps } from './Input';
import styles from './input.module.css';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';

interface Props extends InputProps {
  error?: string | boolean;
}

const ErrorBubbleInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <Input ref={ref} {...props} />;
});

export default withBaseInlineElement<'input', Props>(
  ErrorBubbleInput as React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<'input'> & Props
  >,
  styles as unknown as IStyles,
);
