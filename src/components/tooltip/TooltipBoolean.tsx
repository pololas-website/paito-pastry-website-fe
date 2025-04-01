import styles from './tooltip.module.css';
import { ITooltipBaseProps } from './Tooltip';
import { stringUtils } from '../../utils';

interface ITooltipBooleanProps extends ITooltipBaseProps {
  visible: boolean;
  error?: boolean;
}

export type TooltipBoolean = (props: ITooltipBooleanProps) => JSX.Element;

const TooltipBoolean: TooltipBoolean = ({
  children,
  description,
  visible,
  className,
  error,
}: ITooltipBooleanProps) => {
  /*
  TODO:
  When working with focus and blur event with the form with the fadeAnimation there is the
  following error:
  - when pressing the submit button the input is focused and shows the tooltip as expected
  - when pressing again the submit button the input is focused but now the tooltip dissapears
  - when executing and login without breakpoints the tooltip should be visible but it isn't
  - when executing with breakpoints the input appears unfocus without the tooltip and after
    that when pushing again the input appears focused and with the tooltip which is so strange.
  - This only happens using the useFadeAnimation hook
    - since this hook manages timeouts in order to reflect the animation this seems to be the
      problem
  - since we are not using the useFadeAnimation, there's no animation when showing the errors
    in the tooltip.
  - Solve the problem if possible.
  */
  // const [fadeIn, setFadeIn] = useProgramaticFadeAnimation(tooltipContainerRef);
  // useEffect(() => {
  //   setFadeIn(visible);
  // }, [visible, setFadeIn]);

  const tooltipContainerClasses = stringUtils.join([
    styles['tooltip-container'],
    styles.visible,
    error ? styles.error : '',
    className,
  ]);

  return (
    <div className={styles.container}>
      {children}
      {visible && (
        <div className={tooltipContainerClasses}>
          {description}
          <div className={styles.arrow} />
        </div>
      )}
    </div>
  );
};

export default TooltipBoolean;
