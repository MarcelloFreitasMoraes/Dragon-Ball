import { ReactNode } from "react";

export interface IOpenProps {
    isOpen?: () => void;
    handleKeyPress?: any;
    children: ReactNode;
    isModalDark?: boolean;
    animation: {};
}

export interface IModalDarkProps {
    isModalDark?: boolean;
}