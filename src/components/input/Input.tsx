import styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { stringUtils } from '../../utils';
import { IStyles } from '../core/HOC/baseElement/baseElement.utils';
import { Tooltip } from '../../components';
import TooltipBoolean from '../tooltip/TooltipBoolean';

interface CustomProps {
  short?: boolean;
  error?: string | boolean;
  errorMode?: 'normal' | 'bubble';
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & CustomProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      short,
      error,
      errorMode = 'normal',
      className,
      children,
      onFocus,
      onBlur,
      size,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const classNames = stringUtils.join([styles.input, className]);

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
      <div>
        <Tooltip
          as={TooltipBoolean}
          description={error}
          visible={isFocus && !!error}
        >
          <div className={classNames}>
            <input
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              size={short ? 1 : size}
              {...rest}
            />
            {error && (
              <i
                className={`fa-solid fa-circle-exclamation ${styles['icon-error']}`}
              ></i>
            )}
            {children}
          </div>
        </Tooltip>
        {error && errorMode === 'normal' && <span>{error}</span>}
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
