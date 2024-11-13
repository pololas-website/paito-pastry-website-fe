import * as styles from './inputGroup.module.css';
import { Button, Tooltip } from './../../components';

function InputGroup({ children, label, descriptionHelp }) {
  return (
    <div>
      {label && <label>{label}</label>}
      {descriptionHelp && (
        <Tooltip description={descriptionHelp}>
          <Button
            as={'a'}
            title="Click for more information"
            className={styles['help-icon']}
          >
            <i className="fa-solid fa-circle-question fa-sm"></i>
          </Button>
        </Tooltip>
      )}
      <div className={styles.grid}>{children}</div>
    </div>
  );
}

export default InputGroup;
