import { Button, Tooltip } from './../../components';

import styles from './inputGroup.module.css';

function InputGroup({ children, label, descriptionHelp }) {
  return (
    <div>
      {label && (
        <div className={styles['label-container']}>
          <label>{label}</label>
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
        </div>
      )}
      <div className={styles.grid}>{children}</div>
    </div>
  );
}

export default InputGroup;
