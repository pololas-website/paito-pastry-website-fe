import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import * as styles from './button.module.css';

function Button({ as, children, className = '', ...restProps }) {
  const Container = as ? as : 'button';

  return (
    <Container className={`${styles.btn} ${className}`} {...restProps}>
      {children}
    </Container>
  );
}

export default withBaseInlineElement(Button, styles);
