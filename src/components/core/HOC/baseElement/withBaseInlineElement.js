import { flatClasses } from './baseElement.utils';

function withBaseInlineElement(Component) {
  return function BaseInlineElement({
    small,
    primary,
    contrast,
    className,
    ...rest
  }) {
    const classNames = flatClasses(small, primary, contrast, className);

    return <Component className={classNames} {...rest} />;
  };
}

export default withBaseInlineElement;
