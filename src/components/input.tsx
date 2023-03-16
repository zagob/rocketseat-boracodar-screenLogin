import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="border border-gray-200 font-normal pr-10 rounded py-4 px-3 placeholder:font-normal outline-none focus:outline-purple"
      {...rest}
    />
  );
}
