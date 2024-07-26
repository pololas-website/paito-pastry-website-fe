import * as styles from './button.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';

function Button({ as, children, className = '', ...restProps }) {
  const Container = as ? as : 'button';

  return (
    <Container className={`${styles.btn} ${className}`} {...restProps}>
      {children}
    </Container>
  );
}

export default withBaseInlineElement(Button, styles);
