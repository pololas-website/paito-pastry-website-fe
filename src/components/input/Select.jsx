import * as styles from './input.module.css';
import withBaseInlineElement from '../core/HOC/baseElement/withBaseInlineElement';
import { stringUtils } from './../../utils';

function Select({ className, options, onChange, ...rest }) {
  const classNames = stringUtils.join([styles.input, className]);

  return (
    <select
      className={classNames}
      onChange={(e) => onChange({ name: e.target.name, value: e.target.value })}
      {...rest}
    >
      {options.map((option) => (
        <option key={option} label={option} value={option} />
      ))}
    </select>
  );
}

export default withBaseInlineElement(Select, styles);
