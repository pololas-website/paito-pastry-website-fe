// Empty Object type
const emptySymbol = Symbol('EmptyObject type');
export type EmptyObject = { [emptySymbol]?: never };

type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicComponent<
  C extends React.ElementType,
  CustomProps = EmptyObject,
> = React.PropsWithChildren<AsProp<C> & CustomProps> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof CustomProps>;
