import { useEffect, useRef } from 'react';
import styles from './tooltip.module.css';
import { useFadeAnimation } from '../core/hooks/domHooks';
import { ITooltipBaseProps } from './Tooltip';

interface ITooltipBooleanProps extends ITooltipBaseProps {
  visible: boolean;
}

export type TooltipBoolean = (props: ITooltipBooleanProps) => JSX.Element;

const TooltipBoolean: TooltipBoolean = ({
  children,
  description,
  visible,
}: ITooltipBooleanProps) => {
  const tooltipContainerRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useFadeAnimation(tooltipContainerRef);

  useEffect(() => {
    setFadeIn(visible);
  }, [visible, setFadeIn]);

  return (
    <div className={styles.container}>
      {children}
      {fadeIn && (
        <div className={styles['tooltip-container']} ref={tooltipContainerRef}>
          {description}
        </div>
      )}
    </div>
  );
};

export default TooltipBoolean;
