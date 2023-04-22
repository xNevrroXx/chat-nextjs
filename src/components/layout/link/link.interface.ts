import {IPolymorphic} from "@/models/utilite";
import {ComponentPropsWithoutRef, ElementType} from "react";

interface ILinkProps {
  gradientText?: string,
  animated?: boolean,
}

type TComponentProps = IPolymorphic<ElementType> & ILinkProps; 
export type TLinkComponentProps = TComponentProps & ComponentPropsWithoutRef<ElementType>;