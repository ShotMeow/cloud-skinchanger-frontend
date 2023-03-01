import { HTMLAttributes } from "react";

type ButtonVariants = "primary" | "secondary";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
}
