import * as styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';

function Input({ className, children, ...rest }) {
  const currentClassName = `${styles.input} ${className}`;

  if (children)
    return (
      <span className={currentClassName}>
        <input {...rest} />
        {children}
      </span>
    );

  return <input className={currentClassName} {...rest} />;
}

export default withBaseInlineElement(Input, styles);
