import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { Input, InputProps } from './Input';
import { Tooltip } from '../../components';
import styles from './input.module.css';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';
import TooltipBoolean from '../tooltip/TooltipBoolean';

interface Props extends InputProps {
  error?: string | boolean;
}

const ErrorBubbleInput = forwardRef<HTMLInputElement, Props>(
  ({ error, onFocus, onBlur, ...restProps }, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocus(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocus(false);
      if (onBlur) onBlur(e);
    };

    return (
      <Tooltip
        as={TooltipBoolean}
        description={error}
        visible={isFocus && !!error}
        error
      >
        <Input
          error={!!error}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          {...restProps}
        />
      </Tooltip>
    );
  },
);

export default withBaseInlineElement<'input', Props>(
  ErrorBubbleInput as React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<'input'> & Props
  >,
  styles as unknown as IStyles,
);
