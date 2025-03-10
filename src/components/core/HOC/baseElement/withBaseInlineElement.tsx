/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ElementType } from 'react';
import {
  getComposedClassName,
  IStyles,
  IBasicClasses,
} from './baseElement.utils';
import { polymorphicForwardRef } from '../../types';

interface IWithBaseInlineElementProps extends IBasicClasses {
  className?: string;
}

function withBaseInlineElement<P extends ElementType, ExtraProps = {}>(
  Component: React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<P> & ExtraProps
  >,
  moduleStyles: IStyles,
) {
  return polymorphicForwardRef<P, IWithBaseInlineElementProps & ExtraProps>(
    ({ small, primary, contrast, error, className, ...rest }, ref) => {
      const composedClassName = getComposedClassName(
        {
          small,
          primary,
          contrast,
          error,
        },
        moduleStyles,
        className,
      );

      const props = {
        ...rest,
        className: composedClassName,
      } as React.ComponentPropsWithRef<P> & ExtraProps;

      return <Component {...props} ref={ref} />;
    },
  );
}

export default withBaseInlineElement;
