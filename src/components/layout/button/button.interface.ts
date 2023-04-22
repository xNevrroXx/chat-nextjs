import {IPolymorphic} from "@/models/utilite";
import {ComponentPropsWithoutRef, ReactNode} from "react";

interface IButtonProps {
  gradientText?: string,
  gradientButton?: string,
  animated?: boolean,
}

type TComponentProps = IPolymorphic<"button"> & IButtonProps;
export type TButtonComponentProps = TComponentProps & ComponentPropsWithoutRef<"button">;