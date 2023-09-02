import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    variant: string;
    children: ReactNode;
    onClick?:() => void;
    disabled?: boolean;
    loader?: boolean;
}