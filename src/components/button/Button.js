import * as styles from './button.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { stringUtils } from './../../utils';

function Button({ as, children, className = '', rounded, icon, ...restProps }) {
  const Container = as ? as : 'button';
  const classNames = stringUtils.join([
    styles.btn,
    rounded && styles['rounded'],
    icon && styles['icon'],
    className,
  ]);

  return (
    <Container className={classNames} {...restProps}>
      {children}
    </Container>
  );
}

export default withBaseInlineElement(Button, styles);
