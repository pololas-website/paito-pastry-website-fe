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

  const showBubbleError = () => setVisibleError(true);
  const hideBubbleError = () => setVisibleError(false);

  const fields = (
    <div
      className={styles.grid}
      tabIndex={error ? 0 : undefined}
      onFocus={showBubbleError}
      onBlur={hideBubbleError}
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
      {error ? (
        <Tooltip
          as={TooltipBoolean}
          description={error}
          visible={!!error && visibleError}
          error
        >
          {fields}
        </Tooltip>
      ) : (
        fields
      )}
    </div>
  );
}

export default InputGroup;
