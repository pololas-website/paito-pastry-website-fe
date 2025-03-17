import { TooltipBoolean } from './TooltipBoolean';
import TooltipClick, { TooltipClick as TooltipClickType } from './TooltipClick';
export interface ITooltipBaseProps {
  children: React.ReactNode;
  description: string | React.ReactNode;
}

interface PolymorphicTooltip<T extends TooltipBoolean | TooltipClickType> {
  as?: T;
}

type TooltipProps<
  T extends TooltipBoolean | TooltipClickType = TooltipClickType,
> = PolymorphicTooltip<T> & React.ComponentPropsWithoutRef<T>;

function Tooltip<T extends TooltipBoolean | TooltipClickType>({
  as,
  ...rest
}: TooltipProps<T>) {
  const Component = (as ?? TooltipClick) as unknown as React.FunctionComponent<
    Omit<TooltipProps<T>, 'as'>
  >;

  return <Component {...rest} />;
}

export default Tooltip;
