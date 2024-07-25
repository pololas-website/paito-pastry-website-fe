import { composeAllClasses, getBasicElementClasses } from './baseElement.utils';

function withBaseInlineElement(Component, moduleStyles) {
  return function BaseInlineElement({
    small,
    primary,
    contrast,
    className,
    ...rest
  }) {
    const basicElementClasses = getBasicElementClasses(
      small,
      primary,
      contrast,
    );
    const classNames = composeAllClasses(
      moduleStyles,
      basicElementClasses,
      className,
    );

    return <Component className={classNames} {...rest} />;
  };
}

export default withBaseInlineElement;
