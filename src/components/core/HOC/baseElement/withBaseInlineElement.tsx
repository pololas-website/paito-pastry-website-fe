import {
  getComposedClassName,
  IStyles,
  IBasicClasses,
} from './baseElement.utils';

function withBaseInlineElement<P extends { className?: string }>(
  Component: React.ComponentType<P>,
  moduleStyles: IStyles,
) {
  return function BaseInlineElement({
    small,
    primary,
    contrast,
    className,
    ...rest
  }: IBasicClasses & P) {
    const composedClassName = getComposedClassName(
      {
        small,
        primary,
        contrast,
      },
      moduleStyles,
      className,
    );

    const props = { ...rest, className: composedClassName } as P;

    return <Component {...props} />;
  };
}

export default withBaseInlineElement;
