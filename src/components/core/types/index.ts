/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Empty Object type
// const emptySymbol = Symbol('EmptyObject type');
// export type EmptyObject = { [emptySymbol]?: never };

import {
  forwardRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type ForwardRefRenderFunction,
  type ReactElement,
} from 'react';

type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

type Merge<A, B> = Omit<A, keyof B> & B;

type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;

export type AsProps<
  Component extends ElementType,
  CustomProps extends object,
  NativeProps extends object,
> = DistributiveMerge<NativeProps, CustomProps & { as?: Component }>;

export type PolymorphicWithRef<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = <T extends OnlyAs = Default>(
  props: AsProps<T, Props, ComponentPropsWithRef<T>>,
) => ReactElement | null;

export type PolyForwardComponent<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = Merge<
  ForwardRefExoticComponent<
    Merge<ComponentPropsWithRef<Default>, Props & { as?: Default }>
  >,
  PolymorphicWithRef<Default, Props, OnlyAs>
>;

export type PolyRefFunction = <
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
>(
  Component: ForwardRefRenderFunction<any, Props & { as?: OnlyAs }>,
) => PolyForwardComponent<Default, Props, OnlyAs>;

export const polymorphicForwardRef = forwardRef as PolyRefFunction;
