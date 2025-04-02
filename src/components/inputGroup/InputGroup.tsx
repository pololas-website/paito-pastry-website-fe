import { useState } from 'react';
import TooltipBoolean from '../tooltip/TooltipBoolean';
import { Tooltip } from './../../components';

import styles from './inputGroup.module.css';

interface IInputGroupProps {
  children: React.ReactNode;
  label?: string;
  descriptionHelp?: string | React.ReactNode;
  error?: string;
}

function InputGroup({
  children,
  label,
  descriptionHelp,
  error,
}: IInputGroupProps) {
  const [visibleError, setVisibleError] = useState(false);

  const fields = (
    <div
      className={styles.grid}
      tabIndex={error ? 0 : undefined}
      onFocus={() => setVisibleError(true)}
      onBlur={() => setVisibleError(false)}
    >
      {children}
    </div>
  );

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
      <Tooltip
        as={TooltipBoolean}
        description={error}
        visible={!!error && !!visibleError}
        error
      >
        {fields}
      </Tooltip>
    </div>
  );
}

export default InputGroup;
