import { useState } from 'react';
import * as styles from './tooltip.module.css';
import { useDisableScroll } from '../core/hooks/domHooks';

function Tooltip({ children, description }) {
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);
  useDisableScroll(isToolTipVisible);

  function handleToolTipVisible(e, visible) {
    e.stopPropagation();
    setIsToolTipVisible(visible);
  }

  return (
    <div
      className={styles.container}
      onClick={(e) => handleToolTipVisible(e, true)}
    >
      {children}
      {isToolTipVisible && (
        <>
          <div
            className={styles['background-layer']}
            onClick={(e) => handleToolTipVisible(e, false)}
          ></div>
          <div className={styles.description}>{description}</div>
        </>
      )}
    </div>
  );
}

export default Tooltip;
