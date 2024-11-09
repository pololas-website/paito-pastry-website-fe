import * as styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import * as stringUtils from './../../utils/strings';

function Input({ className, children, ...rest }) {
  const classNames = stringUtils.join([styles.input, className]);

  if (children)
    return (
      <span className={classNames}>
        <input {...rest} />
        {children}
      </span>
    );

  return <input className={classNames} {...rest} />;
}

export default withBaseInlineElement(Input, styles);
