"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function FormButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button className={props.className} {...props}>
      {pending ? <i className={"loading loading-xs loading-spinner"} /> : props.children}
    </button>
  );
}