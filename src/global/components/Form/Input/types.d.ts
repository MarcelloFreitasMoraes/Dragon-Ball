/* eslint-disable no-unused-vars */
import { FormEvent } from "react";

export interface IContentProps {
  onClick: (event: FormEvent) => void;
  onChange: (event: FormEvent) => void;
  placeholder: string0;
  value: string | undefined;
  iconSearch?: boolean;
  iconSend?: boolean;
}
