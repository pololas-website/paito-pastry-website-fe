import { TooltipBoolean } from './TooltipBoolean';
import TooltipClick, { TooltipClick as TooltipClickType } from './TooltipClick';
export interface ITooltipBaseProps {
  children: React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
}

interface PolymorphicTooltip<T extends TooltipBoolean | TooltipClickType> {
  as?: T;
}

type TooltipProps<T extends TooltipBoolean | TooltipClickType> =
  PolymorphicTooltip<T> & React.ComponentPropsWithoutRef<T>;

function Tooltip<
  T extends TooltipBoolean | TooltipClickType = TooltipClickType,
>({ as, ...rest }: TooltipProps<T>) {
  /* 
  Todo:
  Currently it doesn't have much sense to make this assertion but without it
  the typing will get an error. Investigate why this is happening, currently
  it doesn't happen when using a polymorphic component:
  https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
  */
  const Component = (as ?? TooltipClick) as unknown as React.FunctionComponent<
    Omit<TooltipProps<T>, 'as'>
  >;

  return <Component {...rest} />;
}

export default Tooltip;
