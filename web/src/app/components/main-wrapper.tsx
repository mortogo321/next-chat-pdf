import { ReactNode } from "react";
import { mergeClassName } from "../libs/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function MainWrapper({ className, children }: Props) {
  return <div className={mergeClassName("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>;
}
