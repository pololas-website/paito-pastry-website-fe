import { Tooltip } from './../../components';

import styles from './inputGroup.module.css';

interface IInputGroupProps {
  children: React.ReactNode;
  label?: string;
  descriptionHelp?: string | React.ReactNode;
}

function InputGroup({ children, label, descriptionHelp }: IInputGroupProps) {
  return (
    <div>
      {label && (
        <div className={styles['label-container']}>
          <label>{label}</label>
          {descriptionHelp && (
            <Tooltip description={descriptionHelp}>
              <i
                className={`${styles['help-icon']} fa-solid fa-circle-question fa-sm`}
                title="Click for more information"
              ></i>
            </Tooltip>
          )}
        </div>
      )}
      <div className={styles.grid}>{children}</div>
    </div>
  );
}

export default InputGroup;
