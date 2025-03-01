import styles from './button.module.css';
import { PolymorphicComponent } from '../core/types';
import {
  IBasicClasses,
  IStyles,
  getComposedClassName,
} from '../core/HOC/baseElement/baseElement.utils';
import { stringUtils } from '../../utils';

interface IButtonProps extends IBasicClasses {
  icon?: boolean;
  rounded?: boolean;
}

// TODO:
// there are certain common style properties like: small, primary, contrast. That properties
// can be applied to the following components: Button, Input, etc.
// This can be easily accomplished by using a HOC that shares those properties betweeen the passed
// in components
// however since this Button component is a Polymorphic component, this can't be reached for problems
// in the types.
// Goal, try to use a generic Button component with a HOC.
// At the mean time we are going to specify the components manually in the Button but not using a HOC
function Button<C extends React.ElementType = 'button'>({
  icon,
  rounded,
  small,
  primary,
  contrast,
  as,
  children,
  className,
  ...rest
}: PolymorphicComponent<C, IButtonProps>) {
  const Container = as ?? 'button';
  const composedClassName = getComposedClassName(
    {
      small,
      primary,
      contrast,
    },
    styles as unknown as IStyles,
    className,
  );
  const classNames = stringUtils.join([
    styles.btn,
    rounded ? styles.rounded : '',
    icon ? styles.icon : '',
    composedClassName,
  ]);

  return (
    <Container className={classNames} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
