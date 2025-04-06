import { useImperativeHandle, useRef, useState } from 'react';
import { Input, Tooltip } from '..';
import TooltipBoolean from './TooltipBoolean';
import { InputProps } from '../input/Input';
import { polymorphicForwardRef } from '../core/types';

interface Props extends InputProps {
  error?: string | boolean;
}

// Todo:
// Currently this code is unused but will be used tackling the following issue
// https://github.com/pololas-website/paito-pastry-website-fe/issues/37

const TooltipInput = polymorphicForwardRef<'input', Props>(
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

export default TooltipInput;
