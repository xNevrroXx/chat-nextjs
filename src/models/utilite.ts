import {ElementType, ReactNode} from "react";

export type TValueOf<T> = T[keyof T];

export interface IPolymorphic<T extends ElementType> {
    as?: T;
    children: ReactNode;
  };