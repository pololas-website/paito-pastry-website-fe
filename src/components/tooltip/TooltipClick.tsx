import { useRef } from 'react';
import styles from './tooltip.module.css';
import { useFadeAnimation, useDisableScroll } from '../core/hooks/domHooks';
import TooltipDescription from './TooltipDescription';
import { ITooltipBaseProps } from './Tooltip';

type TooltipClickProps = ITooltipBaseProps;

export type TooltipClick = ({
  children,
  description,
}: TooltipClickProps) => JSX.Element;

const TooltipClick: TooltipClick = ({
  children,
  description,
}: TooltipClickProps) => {
  const tooltipContainerRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useFadeAnimation(tooltipContainerRef);

  useDisableScroll(fadeIn);

  const handleHideToolTip = () => {
    setFadeIn(false);
  };

  const handleShowToolTip = () => {
    setFadeIn(true);
  };

  return (
    <div className={styles.container} onClick={handleShowToolTip}>
      {children}
      {fadeIn && (
        <TooltipDescription
          description={description}
          ref={tooltipContainerRef}
          onClick={handleHideToolTip}
        />
      )}
    </div>
  );
};

export default TooltipClick;
