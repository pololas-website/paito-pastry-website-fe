import * as styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import * as stringUtils from './../../utils/strings';

function Select({ className, options, ...rest }) {
  const classNames = stringUtils.join([styles.input, className]);

  return (
    <select className={classNames} {...rest}>
      {options.map((option) => (
        <option key={option.id} {...option} />
      ))}
    </select>
  );
}

export default withBaseInlineElement(Select, styles);
