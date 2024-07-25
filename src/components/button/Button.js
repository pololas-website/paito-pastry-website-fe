import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import './button.css';

function Button({ as, children, className = '', ...restProps }) {
  const Container = as ? as : 'button';

  return (
    <Container {...restProps} className={`btn ${className}`}>
      {children}
    </Container>
  );
}

export default withBaseInlineElement(Button);
